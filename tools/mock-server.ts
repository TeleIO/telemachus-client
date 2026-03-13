#!/usr/bin/env bun
/**
 * Mock Telemachus server for testing the client without KSP running.
 *
 * Serves all three APIs:
 *   - REST:      GET/POST /api/{key}
 *   - Batch:     GET/POST /telemachus/datalink
 *   - WebSocket: ws://host:port/datalink
 *
 * Generates plausible fake data based on key metadata (type, units, plotable).
 * Plotable values drift over time to simulate flight telemetry.
 *
 * Usage:
 *   bun run mock                     # port 8085
 *   bun run mock -- --port 9000      # custom port
 *   bun run mock -- --static         # no drift, deterministic values
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";

const root = resolve(dirname(new URL(import.meta.url).pathname), "..");

interface ApiEntry {
  key: string;
  description: string;
  units?: string;
  plotable?: boolean;
  isAction?: boolean;
  returnType?: string;
  category?: string;
}

const schema: ApiEntry[] = JSON.parse(
  readFileSync(resolve(root, "tools/api-schema.json"), "utf-8"),
);
const keyMap = new Map(schema.map((e) => [e.key, e]));

// ── Value generation ────────────────────────────────────────

const startTime = Date.now();
let tick = 0;

const baseValues: Record<string, number> = {
  "v.altitude": 75_000,
  "v.verticalSpeed": 12.5,
  "v.surfaceSpeed": 2200,
  "v.orbitalVelocity": 2280,
  "o.PeA": 72_000,
  "o.ApA": 120_000,
  "o.inclination": 28.5,
  "o.eccentricity": 0.03,
  "o.period": 2700,
  "o.sma": 675_000,
  "v.missionTime": 0,
  "v.lat": -0.097,
  "v.long": -74.557,
  "f.throttle": 0,
};

function generateValue(entry: ApiEntry): unknown {
  const { key, returnType, plotable, units, isAction } = entry;

  if (isAction) return null;

  // Special cases
  if (key === "a.api")
    return Object.fromEntries(schema.map((e) => [e.key, e.description]));
  if (key === "a.mods") return { far: false, mechjeb: false, principia: false };
  if (key === "a.ip") return ["127.0.0.1"];
  if (key === "a.version") return "1.10.0-mock";
  if (key === "v.name") return "Mock Vessel";
  if (key === "v.body") return "Kerbin";
  if (key === "b.name") return "Kerbin";
  if (key === "v.missionTime") return (Date.now() - startTime) / 1000;

  switch (returnType) {
    case "bool":
      return (
        key.includes("sas") || key.includes("rcs") || key.includes("light")
      );
    case "string":
      return `mock_${key}`;
    case "string[]":
      return [`${key}_0`, `${key}_1`];
    case "object":
      return { mock: true, key };
  }

  // Numeric — either static base or generated
  const base = baseValues[key] ?? seedFromKey(key);

  if (!plotable || isStatic) return round(base);

  // Drift plotable values with sine waves for realism
  const t = tick * 0.02;
  const h1 = seedFromKey(key);
  const drift =
    Math.sin(t + h1) * base * 0.05 + Math.cos(t * 0.3 + h1 * 2) * base * 0.02;
  return round(base + drift);
}

function seedFromKey(key: string): number {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) | 0;
  return Math.abs(h % 10000) + 1;
}

function round(n: number): number {
  return Math.round(n * 1000) / 1000;
}

function applyScaling(
  value: unknown,
  precision?: number,
  asInt?: boolean,
): unknown {
  if (typeof value !== "number") return value;
  if (precision != null)
    value = Math.round((value as number) * 10 ** precision) / 10 ** precision;
  if (asInt && precision != null)
    value = Math.round((value as number) * 10 ** precision);
  return value;
}

function resolveKey(key: string): unknown {
  // Strip bracket params: "o.orbitalSpeedAt[1200]" → "o.orbitalSpeedAt"
  const baseKey = key.replace(/\[.*\]$/, "");
  const entry = keyMap.get(baseKey);
  if (!entry) return undefined;
  return generateValue(entry);
}

// ── CLI args ────────────────────────────────────────────────

const args = process.argv.slice(2);
const portIdx = args.indexOf("--port");
const port = portIdx >= 0 ? parseInt(args[portIdx + 1], 10) : 8085;
const isStatic = args.includes("--static");

// ── HTTP + WebSocket server ─────────────────────────────────

interface WsSub {
  keys: Set<string>;
  rate: number;
  timer: ReturnType<typeof setInterval> | null;
}

const wsSubs = new Map<unknown, WsSub>();

const server = Bun.serve({
  port,
  fetch(req, server) {
    const url = new URL(req.url);

    // WebSocket upgrade
    if (
      url.pathname === "/datalink" &&
      req.headers.get("upgrade") === "websocket"
    ) {
      if (server.upgrade(req)) return undefined as unknown as Response;
      return new Response("WebSocket upgrade failed", { status: 500 });
    }

    tick++;

    // REST: /api/{key}
    if (url.pathname.startsWith("/api/")) {
      const key = url.pathname.slice(5);
      const entry = keyMap.get(key);
      if (!entry) {
        return Response.json({ error: `Unknown key: ${key}` }, { status: 404 });
      }
      const precision = url.searchParams.has("precision")
        ? parseInt(url.searchParams.get("precision")!, 10)
        : undefined;
      const asInt = url.searchParams.get("int") === "true";
      let value = generateValue(entry);
      value = applyScaling(value, precision, asInt);
      return Response.json({ [key]: value });
    }

    // Batch: /telemachus/datalink
    if (url.pathname === "/telemachus/datalink") {
      const globalPrecision = url.searchParams.has("_precision")
        ? parseInt(url.searchParams.get("_precision")!, 10)
        : undefined;
      const globalInt = url.searchParams.get("_int") === "true";

      const result: Record<string, unknown> = {};
      const unknown: string[] = [];

      for (const [param, expr] of url.searchParams.entries()) {
        if (param.startsWith("_")) continue;

        // Parse pipe modifiers: "v.altitude|precision:2|int"
        const parts = expr.split("|");
        const keyExpr = parts[0];
        let precision = globalPrecision;
        let asInt = globalInt;
        for (const mod of parts.slice(1)) {
          if (mod.startsWith("precision:"))
            precision = parseInt(mod.slice(10), 10);
          if (mod === "int") asInt = true;
        }

        const value = resolveKey(keyExpr);
        if (value === undefined) {
          unknown.push(keyExpr);
        } else {
          const outKey = keyExpr.replace(/\[.*\]$/, "");
          result[outKey] = applyScaling(value, precision, asInt);
        }
      }

      if (unknown.length) result.unknown = unknown as any;
      return Response.json(result);
    }

    return new Response("Not Found", { status: 404 });
  },

  websocket: {
    open(ws) {
      wsSubs.set(ws, { keys: new Set(), rate: 500, timer: null });
    },
    message(ws, msg) {
      const sub = wsSubs.get(ws);
      if (!sub) return;

      const data = JSON.parse(String(msg));

      if (data["+"]) for (const k of data["+"]) sub.keys.add(k);
      if (data["-"]) for (const k of data["-"]) sub.keys.delete(k);
      if (data.rate) sub.rate = data.rate;

      // Restart interval
      if (sub.timer) clearInterval(sub.timer);
      if (sub.keys.size > 0) {
        const send = () => {
          tick++;
          const out: Record<string, unknown> = {};
          for (const k of sub.keys) {
            const v = resolveKey(k);
            if (v !== undefined) out[k] = v;
          }
          ws.send(JSON.stringify(out));
        };
        send(); // immediate first frame
        sub.timer = setInterval(send, sub.rate);
      }
    },
    close(ws) {
      const sub = wsSubs.get(ws);
      if (sub?.timer) clearInterval(sub.timer);
      wsSubs.delete(ws);
    },
  },
});

console.log(`Telemachus mock server running on http://localhost:${port}`);
console.log(`WebSocket: ws://localhost:${port}/datalink`);
console.log(
  `${schema.length} API keys loaded (${isStatic ? "static" : "drifting"} mode)`,
);
