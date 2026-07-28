import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { serverVersion } from "./server.js";

const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8")) as {
  version: string;
};
const serverManifest = JSON.parse(readFileSync(new URL("../server.json", import.meta.url), "utf8")) as {
  packages: Array<{ version: string }>;
  version: string;
};
const entrypoint = readFileSync(new URL("./index.ts", import.meta.url), "utf8");

test("keeps runtime, npm, and registry versions aligned", () => {
  assert.equal(serverVersion, packageJson.version);
  assert.equal(serverManifest.version, packageJson.version);
  assert.equal(serverManifest.packages[0]?.version, packageJson.version);
});

test("keeps the npm binary executable through a Node shebang", () => {
  assert.equal(entrypoint.startsWith("#!/usr/bin/env node\n"), true);
});
