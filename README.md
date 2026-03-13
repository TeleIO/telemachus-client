# telemachus-client

TypeScript client for the [Telemachus Reborn](https://github.com/TeleIO/Telemachus-1) KSP telemetry API. Covers all three transport layers — REST, batch datalink, and WebSocket streaming — with fully typed accessors generated from the API schema.

[![npm](https://img.shields.io/npm/v/telemachus-client)](https://www.npmjs.com/package/telemachus-client)

## Install

```bash
bun add telemachus-client
# or
npm install telemachus-client
```

## Quick Start

```ts
import { createClient } from "telemachus-client";

const ksp = createClient({ host: "http://localhost:8085" });
```

### REST — Single Key

```ts
const alt = await ksp.vessel.vAltitude();        // typed: number
const pe  = await ksp.orbit.oPeA();              // typed: number
const mods = await ksp.system.aMods();            // typed: Record<string, unknown>

// Actions (POST)
await ksp.flight.fStage();
await ksp.flight.fSetThrottle(0.5);

// Raw key access
const val = await ksp.query("v.altitude");
await ksp.action("f.stage");
```

### Batch Datalink

Query multiple keys in a single HTTP call:

```ts
const data = await ksp.batch(["v.altitude", "o.PeA", "o.ApA"]);
// → { "v.altitude": 12500, "o.PeA": 75000, "o.ApA": 120000 }
```

With scaling (for embedded controllers):

```ts
const data = await ksp.batch(
  ["v.altitude", "o.PeA"],
  { precision: 2, int: true }
);
```

Per-key pipe modifiers via `batchRaw`:

```ts
const data = await ksp.batchRaw({
  alt: "v.altitude|precision:2|int",
  throttle: "f.setThrottle[512]|scale:0,1023",
});
```

### WebSocket Streaming

```ts
const stream = ksp.stream({
  subscribe: ["v.altitude", "o.PeA"],
  rate: 200,
});

stream.on((data) => {
  console.log(data["v.altitude"], data["o.PeA"]);
});

// Dynamic subscription
stream.subscribe("v.verticalSpeed");
stream.unsubscribe("o.PeA");
stream.setRate(100);

// Cleanup
stream.close();
```

Auto-reconnects with exponential backoff by default. Disable with `reconnect: false`.

## Scaling (Embedded Controllers)

For integer-only boards (Pico, MicroBlocks, etc.), use scaling options on any endpoint:

```ts
// REST with scaling
const val = await ksp.queryScaled("v.altitude", [], {
  precision: 2,
  int: true,
});
// 12345.678 → 1234568 (divide by 100 on board)

// Input scaling for actions
const val = await ksp.queryScaled("f.setThrottle", [512], {
  scale: [0, 1023],
});
// Maps 10-bit ADC value to 0.0–1.0
```

## API Categories

All 520 API keys are organized into typed accessor groups:

| Accessor | Keys | Example |
|----------|------|---------|
| `ksp.vessel` | `v.*` | `vAltitude()`, `vVerticalSpeed()` |
| `ksp.orbit` | `o.*` | `oPeA()`, `oApA()`, `oInclination()` |
| `ksp.flight` | `f.*` | `fSetThrottle(n)`, `fStage()` |
| `ksp.body` | `b.*` | `bName(id)`, `bRadius(id)` |
| `ksp.resource` | `r.*` | `rGetCurrentAmount(name)` |
| `ksp.maneuver` | `m.*` | `mDeltaV()`, `mTimeTo()` |
| `ksp.target` | `tar.*` | `tarName()`, `tarDistance()` |
| `ksp.docking` | `dock.*` | `dockAngle()` |
| `ksp.navigation` | `n.*` | `nHeading()`, `nPitch()` |
| `ksp.system` | `a.*` | `aApi()`, `aMods()` |

Mod-dependent keys (MechJeb, FAR, Principia, etc.) are included and documented — check `a.mods` at runtime to see what's available.

## Key Metadata

Access key metadata at runtime:

```ts
import { KEY_META } from "telemachus-client";

KEY_META["v.altitude"];
// { description: "Altitude", units: "m", isAction: false, plotable: true, category: "vessel", returnType: "double" }
```

## Regenerating Types

When the upstream API schema changes:

```bash
cp ../Telemachus-1/docs/api-schema.json tools/
bun run generate
bun run build
```

## License

MIT
