export {
  TeleClient,
  TeleStream,
  TeleError,
  type TeleClientOptions,
  type ScalingOptions,
  type TelemetryData,
  type BatchResponse,
  type StreamOptions,
} from "./client.js";

export { attachAccessors, KEY_META, type TelemetryKey } from "./generated.js";

import { TeleClient, type TeleClientOptions } from "./client.js";
import { attachAccessors } from "./generated.js";

/** Create a fully-typed Telemachus client with category accessors */
export function createClient(opts?: TeleClientOptions) {
  const client = new TeleClient(opts);
  return Object.assign(client, attachAccessors(client));
}
