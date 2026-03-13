/**
 * Svelte bindings for telemachus-client (store-based, works with Svelte 4 & 5).
 *
 * Usage:
 *   import { createTelemetry, createQuery, createAction } from "telemachus-client/svelte";
 *
 *   const telemetry = createTelemetry(client, ["v.altitude", "o.PeA"]);
 *   $: altitude = $telemetry.data["v.altitude"];
 */

import { readable, writable, type Readable } from "svelte/store";
import {
  TeleClient,
  type TeleClientOptions,
  type TelemetryData,
  type StreamOptions,
} from "./client.js";

// ── Client factory ──────────────────────────────────────────

export function createClient(opts?: TeleClientOptions): TeleClient {
  return new TeleClient(opts);
}

// ── createTelemetry (WebSocket streaming) ───────────────────

export interface TelemetryStore extends Readable<{ data: TelemetryData; connected: boolean }> {
  subscribe: Readable<{ data: TelemetryData; connected: boolean }>["subscribe"];
  addKeys(...keys: string[]): void;
  removeKeys(...keys: string[]): void;
  setRate(ms: number): void;
  destroy(): void;
}

export interface CreateTelemetryOptions extends Omit<StreamOptions, "subscribe"> {}

/** Stream telemetry keys via WebSocket. Returns a Svelte readable store. */
export function createTelemetry(
  client: TeleClient,
  keys: string[],
  opts: CreateTelemetryOptions = {},
): TelemetryStore {
  let stream: ReturnType<TeleClient["stream"]>;
  let currentData: TelemetryData = {};

  const { subscribe } = readable(
    { data: {} as TelemetryData, connected: false },
    (set) => {
      stream = client.stream({ ...opts, subscribe: keys });

      stream.on((frame) => {
        currentData = { ...currentData, ...frame };
        set({ data: currentData, connected: true });
      });

      stream.onError(() => {
        set({ data: currentData, connected: false });
      });

      return () => stream.close();
    },
  );

  return {
    subscribe,
    addKeys: (...k) => stream?.subscribe(...k),
    removeKeys: (...k) => stream?.unsubscribe(...k),
    setRate: (ms) => stream?.setRate(ms),
    destroy: () => stream?.close(),
  };
}

// ── createQuery (single REST fetch) ─────────────────────────

export interface QueryStore<T> extends Readable<{ data: T | undefined; error: Error | undefined; loading: boolean }> {
  refetch(): void;
}

/** Fetch a single telemetry key. Returns a readable store. */
export function createQuery<T = unknown>(
  client: TeleClient,
  key: string,
  ...args: (string | number)[]
): QueryStore<T> {
  const store = writable<{ data: T | undefined; error: Error | undefined; loading: boolean }>({
    data: undefined,
    error: undefined,
    loading: true,
  });

  function doFetch() {
    store.set({ data: undefined, error: undefined, loading: true });
    client
      .query(key, ...args)
      .then((v) => store.set({ data: v as T, error: undefined, loading: false }))
      .catch((e) => store.set({ data: undefined, error: e, loading: false }));
  }

  doFetch();

  return {
    subscribe: store.subscribe,
    refetch: doFetch,
  };
}

// ── createBatch ─────────────────────────────────────────────

export interface BatchStore extends Readable<{ data: TelemetryData; error: Error | undefined; loading: boolean }> {
  refetch(): void;
}

/** Fetch multiple keys in a single batch call */
export function createBatch(
  client: TeleClient,
  keys: string[],
): BatchStore {
  const store = writable<{ data: TelemetryData; error: Error | undefined; loading: boolean }>({
    data: {},
    error: undefined,
    loading: true,
  });

  function doFetch() {
    store.set({ data: {}, error: undefined, loading: true });
    client
      .batch(keys)
      .then((v) => store.set({ data: v, error: undefined, loading: false }))
      .catch((e) => store.set({ data: {}, error: e, loading: false }));
  }

  doFetch();

  return {
    subscribe: store.subscribe,
    refetch: doFetch,
  };
}

// ── createAction ────────────────────────────────────────────

export interface ActionStore extends Readable<{ loading: boolean; error: Error | undefined }> {
  execute(...args: (string | number)[]): Promise<void>;
}

/** Execute a telemetry action (POST) */
export function createAction(
  client: TeleClient,
  key: string,
): ActionStore {
  const store = writable<{ loading: boolean; error: Error | undefined }>({
    loading: false,
    error: undefined,
  });

  async function execute(...args: (string | number)[]) {
    store.set({ loading: true, error: undefined });
    try {
      await client.action(key, ...args);
      store.set({ loading: false, error: undefined });
    } catch (e) {
      store.set({ loading: false, error: e as Error });
      throw e;
    }
  }

  return {
    subscribe: store.subscribe,
    execute,
  };
}
