/**
 * Vue 3 bindings for telemachus-client (Composition API).
 *
 * Usage:
 *   import { provideTelemachus, useTelemetry, useQuery, useAction } from "telemachus-client/vue";
 */

import {
  ref,
  reactive,
  onUnmounted,
  inject,
  provide,
  type InjectionKey,
  type Ref,
} from "vue";
import {
  TeleClient,
  type TeleClientOptions,
  type TelemetryData,
  type StreamOptions,
} from "./client.js";

// ── Context ─────────────────────────────────────────────────

const TeleKey: InjectionKey<TeleClient> = Symbol("telemachus");

/** Provide a TeleClient to the component tree (call in setup of root/layout) */
export function provideTelemachus(opts?: TeleClientOptions): TeleClient {
  const client = new TeleClient(opts);
  provide(TeleKey, client);
  return client;
}

function useClient(): TeleClient {
  const client = inject(TeleKey);
  if (!client) throw new Error("useTelemetry requires provideTelemachus()");
  return client;
}

// ── useTelemetry (WebSocket streaming) ──────────────────────

export interface UseTelemetryOptions extends Omit<StreamOptions, "subscribe"> {}

export interface UseTelemetryReturn {
  data: TelemetryData;
  connected: Ref<boolean>;
  subscribe: (...keys: string[]) => void;
  unsubscribe: (...keys: string[]) => void;
  setRate: (ms: number) => void;
}

/** Stream telemetry keys via WebSocket */
export function useTelemetry(
  keys: string[],
  opts: UseTelemetryOptions = {},
): UseTelemetryReturn {
  const client = useClient();
  const data = reactive<TelemetryData>({});
  const connected = ref(false);

  const stream = client.stream({ ...opts, subscribe: keys });

  stream.on((frame) => {
    connected.value = true;
    Object.assign(data, frame);
  });

  stream.onError(() => {
    connected.value = false;
  });

  onUnmounted(() => stream.close());

  return {
    data,
    connected,
    subscribe: (...k) => stream.subscribe(...k),
    unsubscribe: (...k) => stream.unsubscribe(...k),
    setRate: (ms) => stream.setRate(ms),
  };
}

// ── useQuery (single REST fetch) ────────────────────────────

export interface UseQueryReturn<T> {
  data: Ref<T | undefined>;
  error: Ref<Error | undefined>;
  loading: Ref<boolean>;
  refetch: () => void;
}

/** Fetch a single telemetry key */
export function useQuery<T = unknown>(
  key: string,
  ...args: (string | number)[]
): UseQueryReturn<T> {
  const client = useClient();
  const data = ref<T | undefined>(undefined) as Ref<T | undefined>;
  const error = ref<Error | undefined>(undefined) as Ref<Error | undefined>;
  const loading = ref(true);

  function doFetch() {
    loading.value = true;
    error.value = undefined;
    client
      .query(key, ...args)
      .then((v) => {
        data.value = v as T;
        loading.value = false;
      })
      .catch((e) => {
        error.value = e;
        loading.value = false;
      });
  }

  doFetch();

  return { data, error, loading, refetch: doFetch };
}

// ── useBatch ────────────────────────────────────────────────

export interface UseBatchReturn {
  data: TelemetryData;
  error: Ref<Error | undefined>;
  loading: Ref<boolean>;
  refetch: () => void;
}

/** Fetch multiple keys in a single batch call */
export function useBatch(keys: string[]): UseBatchReturn {
  const client = useClient();
  const data = reactive<TelemetryData>({});
  const error = ref<Error | undefined>(undefined) as Ref<Error | undefined>;
  const loading = ref(true);

  function doFetch() {
    loading.value = true;
    error.value = undefined;
    client
      .batch(keys)
      .then((v) => {
        Object.keys(data).forEach((k) => delete data[k]);
        Object.assign(data, v);
        loading.value = false;
      })
      .catch((e) => {
        error.value = e;
        loading.value = false;
      });
  }

  doFetch();

  return { data, error, loading, refetch: doFetch };
}

// ── useAction ───────────────────────────────────────────────

export interface UseActionReturn {
  execute: (...args: (string | number)[]) => Promise<void>;
  loading: Ref<boolean>;
  error: Ref<Error | undefined>;
}

/** Execute a telemetry action (POST) */
export function useAction(key: string): UseActionReturn {
  const client = useClient();
  const loading = ref(false);
  const error = ref<Error | undefined>(undefined) as Ref<Error | undefined>;

  async function execute(...args: (string | number)[]) {
    loading.value = true;
    error.value = undefined;
    try {
      await client.action(key, ...args);
    } catch (e) {
      error.value = e as Error;
      throw e;
    } finally {
      loading.value = false;
    }
  }

  return { execute, loading, error };
}
