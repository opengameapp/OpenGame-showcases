import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { serverVersion } from "./server.js";

const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8")) as {
  mcpName: string;
  name: string;
  version: string;
};
const serverManifest = JSON.parse(readFileSync(new URL("../server.json", import.meta.url), "utf8")) as {
  name: string;
  packages: Array<{
    identifier: string;
    registryType: string;
    transport: { type: string };
    version: string;
  }>;
  version: string;
};
const discoveryManifest = JSON.parse(
  readFileSync(new URL("../../../.well-known/mcp/server.json", import.meta.url), "utf8"),
) as {
  name: string;
  packages: Array<{
    identifier: string;
    registryType: string;
    transport: { type: string };
    version: string;
  }>;
  version: string;
};
const entrypoint = readFileSync(new URL("./index.ts", import.meta.url), "utf8");

test("keeps runtime, npm, and registry versions aligned", () => {
  assert.equal(serverVersion, packageJson.version);
  assert.equal(serverManifest.name, packageJson.mcpName);
  assert.equal(serverManifest.version, packageJson.version);
  assert.equal(serverManifest.packages[0]?.identifier, packageJson.name);
  assert.equal(serverManifest.packages[0]?.registryType, "npm");
  assert.equal(serverManifest.packages[0]?.transport.type, "stdio");
  assert.equal(serverManifest.packages[0]?.version, packageJson.version);
  assert.deepEqual(discoveryManifest, serverManifest);
});

test("keeps the npm binary executable through a Node shebang", () => {
  assert.equal(entrypoint.startsWith("#!/usr/bin/env node\n"), true);
});
