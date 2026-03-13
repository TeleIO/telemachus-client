/**
 * Open MCT telemetry provider plugin for Telemachus.
 *
 * Registers Telemachus as a telemetry source in Open MCT, exposing all
 * API keys as subscribable telemetry objects with proper domains/ranges.
 *
 * Usage:
 *   import { TelemachusPlugin } from "telemachus-client/openmct";
 *
 *   openmct.install(TelemachusPlugin({ host: "http://localhost:8085" }));
 */

import {
  TeleClient,
  TeleStream,
  type TeleClientOptions,
  type TelemetryData,
} from "./client.js";
import { KEY_META } from "./generated.js";

export interface TelemachusPluginOptions extends TeleClientOptions {
  /** Namespace for telemetry objects (default: "telemachus") */
  namespace?: string;
  /** WebSocket polling rate in ms (default: 500) */
  rate?: number;
}

const CATEGORIES = new Map<string, string>();
for (const [key, meta] of Object.entries(KEY_META)) {
  if (meta.category) CATEGORIES.set(meta.category, meta.category);
}

/**
 * Open MCT plugin that provides Telemachus telemetry.
 *
 * Creates a root object with category folders, each containing
 * the telemetry points for that category. Plotable numeric values
 * get proper range metadata for Open MCT's built-in plots.
 */
export function TelemachusPlugin(opts: TelemachusPluginOptions = {}) {
  return function install(openmct: any) {
    const ns = opts.namespace ?? "telemachus";
    const client = new TeleClient(opts);
    const rate = opts.rate ?? 500;

    // ── Object provider ───────────────────────────────────

    const rootId = { namespace: ns, key: "root" };

    openmct.objects.addRoot(rootId);

    openmct.objects.addProvider(ns, {
      get(identifier: { namespace: string; key: string }) {
        const { key } = identifier;

        // Root folder
        if (key === "root") {
          return Promise.resolve({
            identifier,
            name: "Telemachus",
            type: "folder",
            location: "ROOT",
            composition: [...CATEGORIES.keys()].map((cat) => ({
              namespace: ns,
              key: `cat:${cat}`,
            })),
          });
        }

        // Category folder
        if (key.startsWith("cat:")) {
          const cat = key.slice(4);
          const catKeys = Object.entries(KEY_META)
            .filter(([, m]) => m.category === cat && !m.isAction)
            .map(([k]) => k);
          return Promise.resolve({
            identifier,
            name: cat.charAt(0).toUpperCase() + cat.slice(1),
            type: "folder",
            location: `${ns}:root`,
            composition: catKeys.map((k) => ({
              namespace: ns,
              key: `t:${k}`,
            })),
          });
        }

        // Telemetry point
        if (key.startsWith("t:")) {
          const apiKey = key.slice(2);
          const meta = KEY_META[apiKey];
          if (!meta) return Promise.resolve(undefined);

          const telemetryObj: Record<string, unknown> = {
            identifier,
            name: `${apiKey} — ${meta.description}`,
            type: "telemetry",
            location: `${ns}:cat:${meta.category ?? "uncategorized"}`,
            telemetry: {
              values: [
                {
                  key: "utc",
                  source: "timestamp",
                  name: "Timestamp",
                  format: "utc",
                  hints: { domain: 1 },
                },
                {
                  key: "value",
                  name: meta.description,
                  units: meta.units,
                  format: meta.returnType === "string" ? "string" : "number",
                  hints: { range: 1 },
                },
              ],
            },
          };

          return Promise.resolve(telemetryObj);
        }

        return Promise.resolve(undefined);
      },
    });

    // ── Telemetry provider ────────────────────────────────

    const listeners = new Map<string, Set<(datum: Record<string, unknown>) => void>>();
    let stream: TeleStream | null = null;

    function ensureStream() {
      if (stream) return;
      stream = client.stream({ rate, reconnect: true });
      stream.on((frame: TelemetryData) => {
        const timestamp = Date.now();
        for (const [apiKey, value] of Object.entries(frame)) {
          const cbs = listeners.get(apiKey);
          if (cbs) {
            const datum = { timestamp, value };
            for (const cb of cbs) cb(datum);
          }
        }
      });
    }

    openmct.telemetry.addProvider({
      supportsRequest(domainObject: any) {
        return (
          domainObject.identifier.namespace === ns &&
          domainObject.identifier.key.startsWith("t:")
        );
      },

      request(domainObject: any) {
        const apiKey = domainObject.identifier.key.slice(2);
        return client
          .query(apiKey)
          .then((value) => [{ timestamp: Date.now(), value }])
          .catch(() => []);
      },

      supportsSubscribe(domainObject: any) {
        return (
          domainObject.identifier.namespace === ns &&
          domainObject.identifier.key.startsWith("t:")
        );
      },

      subscribe(domainObject: any, callback: (datum: Record<string, unknown>) => void) {
        const apiKey = domainObject.identifier.key.slice(2);

        if (!listeners.has(apiKey)) {
          listeners.set(apiKey, new Set());
        }
        listeners.get(apiKey)!.add(callback);

        ensureStream();
        stream!.subscribe(apiKey);

        // Return unsubscribe function
        return function unsubscribe() {
          const cbs = listeners.get(apiKey);
          if (cbs) {
            cbs.delete(callback);
            if (cbs.size === 0) {
              listeners.delete(apiKey);
              stream?.unsubscribe(apiKey);
            }
          }
          // Close stream if no more listeners
          if (listeners.size === 0 && stream) {
            stream.close();
            stream = null;
          }
        };
      },
    });
  };
}
