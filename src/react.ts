/**
 * React bindings for telemachus-client.
 *
 * Usage:
 *   import { TeleProvider, useTelemetry, useQuery, useAction } from "telemachus-client/react";
 */

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  createElement,
  type ReactNode,
} from "react";
import {
  TeleClient,
  type TeleClientOptions,
  type TelemetryData,
  type StreamOptions,
} from "./client.js";

// ── Context ─────────────────────────────────────────────────

const TeleContext = createContext<TeleClient | null>(null);

export interface TeleProviderProps extends TeleClientOptions {
  children: ReactNode;
}

/** Provide a TeleClient to the component tree */
export function TeleProvider({ children, ...opts }: TeleProviderProps) {
  const client = useMemo(() => new TeleClient(opts), [opts.host, opts.rate]);
  return createElement(TeleContext.Provider, { value: client }, children);
}

function useClient(): TeleClient {
  const client = useContext(TeleContext);
  if (!client) throw new Error("useTelemetry requires a <TeleProvider>");
  return client;
}

// ── useTelemetry (WebSocket streaming) ──────────────────────

export interface UseTelemetryOptions extends Omit<StreamOptions, "subscribe"> {
  /** Pause streaming (default: false) */
  paused?: boolean;
}

export interface UseTelemetryResult {
  data: TelemetryData;
  connected: boolean;
  subscribe: (...keys: string[]) => void;
  unsubscribe: (...keys: string[]) => void;
  setRate: (ms: number) => void;
}

/** Stream telemetry keys via WebSocket. Re-renders on each frame. */
export function useTelemetry(
  keys: string[],
  opts: UseTelemetryOptions = {},
): UseTelemetryResult {
  const client = useClient();
  const [data, setData] = useState<TelemetryData>({});
  const [connected, setConnected] = useState(false);
  const streamRef = useRef<ReturnType<TeleClient["stream"]> | null>(null);

  const paused = opts.paused ?? false;
  const keysKey = keys.join(",");

  useEffect(() => {
    if (paused) return;

    const stream = client.stream({ ...opts, subscribe: keys });
    streamRef.current = stream;

    stream.on((frame) => {
      setConnected(true);
      setData((prev) => ({ ...prev, ...frame }));
    });

    stream.onError(() => setConnected(false));

    return () => {
      stream.close();
      streamRef.current = null;
      setConnected(false);
    };
  }, [client, keysKey, paused, opts.rate]);

  const subscribe = useCallback(
    (...k: string[]) => streamRef.current?.subscribe(...k),
    [],
  );
  const unsubscribe = useCallback(
    (...k: string[]) => streamRef.current?.unsubscribe(...k),
    [],
  );
  const setRate = useCallback(
    (ms: number) => streamRef.current?.setRate(ms),
    [],
  );

  return { data, connected, subscribe, unsubscribe, setRate };
}

// ── useQuery (single REST fetch) ────────────────────────────

export interface UseQueryResult<T> {
  data: T | undefined;
  error: Error | undefined;
  loading: boolean;
  refetch: () => void;
}

/** Fetch a single telemetry key. Refetches when key or args change. */
export function useQuery<T = unknown>(
  key: string,
  ...args: (string | number)[]
): UseQueryResult<T> {
  const client = useClient();
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const argsKey = args.join(",");

  const doFetch = useCallback(() => {
    setLoading(true);
    setError(undefined);
    client
      .query(key, ...args)
      .then((v) => {
        setData(v as T);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [client, key, argsKey]);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return { data, error, loading, refetch: doFetch };
}

// ── useBatch ────────────────────────────────────────────────

export interface UseBatchResult {
  data: TelemetryData;
  error: Error | undefined;
  loading: boolean;
  refetch: () => void;
}

/** Fetch multiple keys in a single batch call */
export function useBatch(keys: string[]): UseBatchResult {
  const client = useClient();
  const [data, setData] = useState<TelemetryData>({});
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const keysKey = keys.join(",");

  const doFetch = useCallback(() => {
    setLoading(true);
    setError(undefined);
    client
      .batch(keys)
      .then((v) => {
        setData(v);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [client, keysKey]);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return { data, error, loading, refetch: doFetch };
}

// ── useAction ───────────────────────────────────────────────

export interface UseActionResult {
  execute: (...args: (string | number)[]) => Promise<void>;
  loading: boolean;
  error: Error | undefined;
}

/** Execute a telemetry action (POST) */
export function useAction(key: string): UseActionResult {
  const client = useClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const execute = useCallback(
    async (...args: (string | number)[]) => {
      setLoading(true);
      setError(undefined);
      try {
        await client.action(key, ...args);
      } catch (e) {
        setError(e as Error);
        throw e;
      } finally {
        setLoading(false);
      }
    },
    [client, key],
  );

  return { execute, loading, error };
}
