#!/usr/bin/env bun
/**
 * Generates typed accessor interfaces from the Telemachus API schema.
 * Reads tools/api-schema.json, writes src/generated.ts
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";

const root = resolve(dirname(new URL(import.meta.url).pathname), "..");

interface ApiEntry {
  key: string;
  description: string;
  units?: string;
  plotable?: boolean;
  isAction?: boolean;
  alwaysEvaluable?: boolean;
  category?: string;
  returnType?: string;
  params?: string;
  since?: string;
  requiresMod?: string;
  deprecated?: boolean;
  deprecatedMessage?: string;
}

const schema: ApiEntry[] = JSON.parse(
  readFileSync(resolve(root, "tools/api-schema.json"), "utf-8"),
);

function tsType(returnType?: string): string {
  switch (returnType) {
    case "double":
    case "float":
    case "int":
      return "number";
    case "bool":
      return "boolean";
    case "string":
      return "string";
    case "string[]":
      return "string[]";
    case "object":
      return "Record<string, unknown>";
    default:
      return "unknown";
  }
}

function camelCase(s: string): string {
  return s.replace(/[._](\w)/g, (_, c) => c.toUpperCase());
}

// Group by category
const byCategory = new Map<string, ApiEntry[]>();
for (const e of schema) {
  const cat = e.category ?? "uncategorized";
  if (!byCategory.has(cat)) byCategory.set(cat, []);
  byCategory.get(cat)!.push(e);
}

const lines: string[] = [
  "// Auto-generated from api-schema.json — do not edit",
  "// Run `bun run generate` to regenerate",
  "",
  'import type { TeleClient } from "./client.js";',
  "",
];

// Generate the keys union type
lines.push("/** All known Telemachus API keys */");
lines.push("export type TelemetryKey =");
for (const e of schema) {
  lines.push(`  | "${e.key}"`);
}
lines.push(";");
lines.push("");

// Generate per-category accessor classes
for (const [cat, entries] of [...byCategory.entries()].sort()) {
  const className = cat.charAt(0).toUpperCase() + cat.slice(1) + "Api";
  lines.push(`/** ${cat} telemetry */`);
  lines.push(`export class ${className} {`);
  lines.push(`  constructor(private readonly client: TeleClient) {}`);
  lines.push("");

  for (const e of entries) {
    const hasParams = !!e.params;
    const retType = tsType(e.returnType);
    const methodName = camelCase(e.key);
    const deprecated = e.deprecated
      ? "  /** @deprecated " + (e.deprecatedMessage ?? "") + " */\n"
      : "";
    const doc = `  /** ${e.description}${e.units && e.units !== "UNITLESS" ? ` (${e.units})` : ""}${e.requiresMod ? ` — requires ${e.requiresMod}` : ""} */`;

    lines.push(doc);
    if (deprecated) lines.push(deprecated.trimEnd());

    if (e.isAction) {
      if (hasParams) {
        lines.push(
          `  ${methodName}(...args: (string | number)[]): Promise<void> {`,
        );
        lines.push(`    return this.client.action("${e.key}", ...args);`);
      } else {
        lines.push(`  ${methodName}(): Promise<void> {`);
        lines.push(`    return this.client.action("${e.key}");`);
      }
    } else {
      if (hasParams) {
        lines.push(
          `  ${methodName}(...args: (string | number)[]): Promise<${retType}> {`,
        );
        lines.push(
          `    return this.client.query("${e.key}", ...args) as Promise<${retType}>;`,
        );
      } else {
        lines.push(`  ${methodName}(): Promise<${retType}> {`);
        lines.push(
          `    return this.client.query("${e.key}") as Promise<${retType}>;`,
        );
      }
    }
    lines.push("  }");
    lines.push("");
  }

  lines.push("}");
  lines.push("");
}

// Generate mixin that attaches all categories to the client
lines.push("/** Attach typed accessors to a client */");
lines.push("export function attachAccessors(client: TeleClient) {");
lines.push("  return {");
for (const [cat] of [...byCategory.entries()].sort()) {
  const className = cat.charAt(0).toUpperCase() + cat.slice(1) + "Api";
  lines.push(`    ${cat}: new ${className}(client),`);
}
lines.push("  };");
lines.push("}");
lines.push("");

// Key metadata map for runtime use
lines.push("/** Metadata for each API key */");
lines.push(
  "export const KEY_META: Record<string, { description: string; units?: string; isAction: boolean; plotable: boolean; category?: string; returnType?: string; requiresMod?: string }> = {",
);
for (const e of schema) {
  const meta = [
    `description: ${JSON.stringify(e.description)}`,
    e.units && e.units !== "UNITLESS" ? `units: "${e.units}"` : null,
    `isAction: ${!!e.isAction}`,
    `plotable: ${!!e.plotable}`,
    e.category ? `category: "${e.category}"` : null,
    e.returnType ? `returnType: "${e.returnType}"` : null,
    e.requiresMod ? `requiresMod: "${e.requiresMod}"` : null,
  ].filter(Boolean);
  lines.push(`  "${e.key}": { ${meta.join(", ")} },`);
}
lines.push("};");

writeFileSync(resolve(root, "src/generated.ts"), lines.join("\n") + "\n");
console.log(
  `Generated src/generated.ts with ${schema.length} keys in ${byCategory.size} categories`,
);
