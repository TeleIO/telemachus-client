#!/usr/bin/env bun
/**
 * Fetches the latest api-schema.json from the Telemachus-1 CI.
 *
 * Sources (tried in order):
 *   1. Latest GitHub release asset
 *   2. Latest CI build artifact (requires GITHUB_TOKEN)
 *   3. Local sibling repo (../Telemachus-1/publish/api-schema.json)
 *
 * After fetching, regenerates typed accessors.
 *
 * Usage:
 *   bun run tools/sync-schema.ts
 *   bun run tools/sync-schema.ts --local   # skip GitHub, use sibling repo
 */

import { existsSync, writeFileSync, readFileSync } from "fs";
import { resolve, dirname } from "path";
import { $ } from "bun";

const root = resolve(dirname(new URL(import.meta.url).pathname), "..");
const dest = resolve(root, "tools/api-schema.json");
const repo = "TeleIO/Telemachus-1";
const localPath = resolve(root, "../Telemachus-1/publish/api-schema.json");

const useLocal = process.argv.includes("--local");

async function fromRelease(): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${repo}/releases/latest`,
      headers(),
    );
    if (!res.ok) return null;
    const release = (await res.json()) as {
      assets: { name: string; browser_download_url: string }[];
      tag_name: string;
    };
    const asset = release.assets.find((a) => a.name === "api-schema.json");
    if (!asset) return null;
    const dl = await fetch(asset.browser_download_url, headers());
    if (!dl.ok) return null;
    console.log(`Fetched from release ${release.tag_name}`);
    return dl.text();
  } catch {
    return null;
  }
}

async function fromArtifact(): Promise<string | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;
  try {
    // Get latest successful build run on main
    const runsRes = await fetch(
      `https://api.github.com/repos/${repo}/actions/runs?branch=main&status=success&per_page=1`,
      headers(),
    );
    if (!runsRes.ok) return null;
    const runs = (await runsRes.json()) as {
      workflow_runs: { id: number; head_sha: string }[];
    };
    const run = runs.workflow_runs[0];
    if (!run) return null;

    // gh CLI handles artifact download auth better than raw API
    const result =
      await $`gh run download ${run.id} -R ${repo} -n GameData -D /tmp/telemachus-artifact 2>&1`.quiet();
    if (result.exitCode !== 0) return null;

    const artifactPath = "/tmp/telemachus-artifact/api-schema.json";
    if (!existsSync(artifactPath)) return null;
    console.log(
      `Fetched from CI artifact (run ${run.id}, ${run.head_sha.slice(0, 7)})`,
    );
    return readFileSync(artifactPath, "utf-8");
  } catch {
    return null;
  }
}

function fromLocal(): string | null {
  if (!existsSync(localPath)) return null;
  console.log(`Using local sibling repo: ${localPath}`);
  return readFileSync(localPath, "utf-8");
}

function headers(): RequestInit {
  const token = process.env.GITHUB_TOKEN;
  return token
    ? {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/json",
        },
      }
    : {};
}

async function main() {
  let schema: string | null = null;

  if (useLocal) {
    schema = fromLocal();
  } else {
    schema = await fromRelease();
    if (!schema) {
      console.log("No release asset found, trying CI artifact...");
      schema = await fromArtifact();
    }
    if (!schema) {
      console.log("No CI artifact, falling back to local repo...");
      schema = fromLocal();
    }
  }

  if (!schema) {
    console.error("Could not fetch api-schema.json from any source");
    process.exit(1);
  }

  // Validate it's valid JSON array
  const entries = JSON.parse(schema);
  if (!Array.isArray(entries)) {
    console.error("Schema is not a JSON array");
    process.exit(1);
  }

  writeFileSync(dest, schema);
  console.log(`Wrote ${entries.length} entries to tools/api-schema.json`);

  // Regenerate types
  console.log("Regenerating typed accessors...");
  await $`bun run tools/generate-types.ts`;
}

main();
