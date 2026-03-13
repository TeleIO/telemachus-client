/**
 * Core Telemachus client — REST, batch, and WebSocket APIs.
 */

export interface TeleClientOptions {
  /** Base URL of the Telemachus server (default: http://localhost:8085) */
  host?: string;
  /** Default WebSocket rate in ms (default: 500) */
  rate?: number;
}

export interface ScalingOptions {
  /** Map input arg from [min,max] to [0,1] */
  scale?: [number, number];
  /** Round output to N decimal places */
  precision?: number;
  /** Return output × 10^precision as integer */
  int?: boolean;
}

export type TelemetryData = Record<string, unknown>;

export interface BatchResponse extends TelemetryData {
  unknown?: string[];
  errors?: Record<string, string>;
}

export class TeleClient {
  readonly host: string;
  private readonly defaultRate: number;

  constructor(opts: TeleClientOptions = {}) {
    this.host = (opts.host ?? "http://localhost:8085").replace(/\/$/, "");
    this.defaultRate = opts.rate ?? 500;
  }

  // ── REST API ──────────────────────────────────────────────

  /** Query a single telemetry key */
  async query(
    key: string,
    ...args: (string | number)[]
  ): Promise<unknown> {
    const qs = args.length ? "?" + args.join(",") : "";
    const res = await fetch(`${this.host}/api/${key}${qs}`);
    if (!res.ok) throw new TeleError(key, res.status, await res.text());
    const data = await res.json();
    return data[key];
  }

  /** Query with scaling options */
  async queryScaled(
    key: string,
    args: (string | number)[],
    scaling: ScalingOptions,
  ): Promise<unknown> {
    const params = new URLSearchParams();
    if (args.length) params.set("args", args.join(","));
    if (scaling.scale) params.set("scale", scaling.scale.join(","));
    if (scaling.precision != null)
      params.set("precision", String(scaling.precision));
    if (scaling.int) params.set("int", "true");
    const qs = params.toString();
    const res = await fetch(`${this.host}/api/${key}${qs ? "?" + qs : ""}`);
    if (!res.ok) throw new TeleError(key, res.status, await res.text());
    const data = await res.json();
    return data[key];
  }

  /** Execute an action (POST) */
  async action(key: string, ...args: (string | number)[]): Promise<void> {
    const qs = args.length ? "?" + args.join(",") : "";
    const res = await fetch(`${this.host}/api/${key}${qs}`, {
      method: "POST",
    });
    if (!res.ok) throw new TeleError(key, res.status, await res.text());
  }

  // ── Batch API ─────────────────────────────────────────────

  /** Query multiple keys in a single HTTP call */
  async batch(
    keys: string[],
    scaling?: ScalingOptions,
  ): Promise<BatchResponse> {
    const params = new URLSearchParams();
    keys.forEach((k, i) => params.set(`key${i + 1}`, k));
    if (scaling?.scale) params.set("_scale", scaling.scale.join(","));
    if (scaling?.precision != null)
      params.set("_precision", String(scaling.precision));
    if (scaling?.int) params.set("_int", "true");
    const res = await fetch(
      `${this.host}/telemachus/datalink?${params.toString()}`,
    );
    if (!res.ok) throw new TeleError("batch", res.status, await res.text());
    return res.json();
  }

  /** Batch with per-key pipe modifiers */
  async batchRaw(entries: Record<string, string>): Promise<BatchResponse> {
    const params = new URLSearchParams();
    let i = 1;
    for (const [alias, expr] of Object.entries(entries)) {
      params.set(`${alias}`, expr);
      i++;
    }
    const res = await fetch(
      `${this.host}/telemachus/datalink?${params.toString()}`,
    );
    if (!res.ok) throw new TeleError("batchRaw", res.status, await res.text());
    return res.json();
  }

  // ── WebSocket ─────────────────────────────────────────────

  /** Open a streaming WebSocket connection */
  stream(opts: StreamOptions = {}): TeleStream {
    return new TeleStream(this.host, {
      rate: opts.rate ?? this.defaultRate,
      ...opts,
    });
  }
}

// ── WebSocket streaming ───────────────────────────────────

export interface StreamOptions {
  /** Update rate in ms */
  rate?: number;
  /** Keys to subscribe to immediately */
  subscribe?: string[];
  /** Auto-reconnect on disconnect (default: true) */
  reconnect?: boolean;
  /** Max reconnect delay in ms (default: 5000) */
  maxReconnectDelay?: number;
}

type StreamListener = (data: TelemetryData) => void;
type ErrorListener = (error: Event | Error) => void;

export class TeleStream {
  private ws: WebSocket | null = null;
  private subscriptions = new Set<string>();
  private rate: number;
  private readonly listeners: StreamListener[] = [];
  private readonly errorListeners: ErrorListener[] = [];
  private readonly reconnect: boolean;
  private readonly maxReconnectDelay: number;
  private reconnectDelay = 250;
  private closed = false;
  private readonly wsUrl: string;

  constructor(host: string, opts: StreamOptions & { rate: number }) {
    this.wsUrl = host.replace(/^http/, "ws") + "/datalink";
    this.rate = opts.rate;
    this.reconnect = opts.reconnect ?? true;
    this.maxReconnectDelay = opts.maxReconnectDelay ?? 5000;

    if (opts.subscribe) {
      for (const k of opts.subscribe) this.subscriptions.add(k);
    }

    this.connect();
  }

  private connect() {
    this.ws = new WebSocket(this.wsUrl);

    this.ws.onopen = () => {
      this.reconnectDelay = 250;
      if (this.subscriptions.size > 0) {
        this.send({ "+": [...this.subscriptions], rate: this.rate });
      }
    };

    this.ws.onmessage = (event) => {
      const data = JSON.parse(String(event.data)) as TelemetryData;
      for (const fn of this.listeners) fn(data);
    };

    this.ws.onclose = () => {
      if (!this.closed && this.reconnect) {
        setTimeout(() => this.connect(), this.reconnectDelay);
        this.reconnectDelay = Math.min(
          this.reconnectDelay * 2,
          this.maxReconnectDelay,
        );
      }
    };

    this.ws.onerror = (e) => {
      for (const fn of this.errorListeners) fn(e);
    };
  }

  private send(msg: Record<string, unknown>) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(msg));
    }
  }

  /** Subscribe to additional keys */
  subscribe(...keys: string[]): this {
    const newKeys: string[] = [];
    for (const k of keys) {
      if (!this.subscriptions.has(k)) {
        this.subscriptions.add(k);
        newKeys.push(k);
      }
    }
    if (newKeys.length) this.send({ "+": newKeys });
    return this;
  }

  /** Unsubscribe from keys */
  unsubscribe(...keys: string[]): this {
    const removed: string[] = [];
    for (const k of keys) {
      if (this.subscriptions.delete(k)) removed.push(k);
    }
    if (removed.length) this.send({ "-": removed });
    return this;
  }

  /** Change the update rate */
  setRate(ms: number): this {
    this.rate = ms;
    this.send({ rate: ms });
    return this;
  }

  /** Register a data listener */
  on(fn: StreamListener): this {
    this.listeners.push(fn);
    return this;
  }

  /** Register an error listener */
  onError(fn: ErrorListener): this {
    this.errorListeners.push(fn);
    return this;
  }

  /** Close the connection */
  close() {
    this.closed = true;
    this.ws?.close();
  }
}

// ── Errors ──────────────────────────────────────────────────

export class TeleError extends Error {
  constructor(
    public readonly key: string,
    public readonly status: number,
    public readonly body: string,
  ) {
    super(`Telemachus error for "${key}": ${status} — ${body}`);
    this.name = "TeleError";
  }
}
