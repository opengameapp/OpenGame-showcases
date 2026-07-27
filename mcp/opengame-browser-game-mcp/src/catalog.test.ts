import assert from "node:assert/strict";
import test from "node:test";

import { createGameBlueprint, listShowcases, recommendBrowserRuntime, validateGameBrief } from "./catalog.js";

test("recommends Three.js for an explicitly 3D prototype", () => {
  const result = recommendBrowserRuntime({
    dimension: "3d",
    genre: "exploration",
    platform: "desktop",
    idea: "Fly through a small voxel canyon"
  });

  assert.equal(result.runtime, "Three.js / WebGL");
  assert.equal(result.dimension, "3d");
});

test("keeps a 2D platformer in a low-overhead runtime", () => {
  const result = recommendBrowserRuntime({
    dimension: "2d",
    genre: "platformer",
    platform: "cross-platform",
    idea: "Dash between rooftop gardens"
  });

  assert.equal(result.runtime, "Canvas 2D");
  assert.equal(result.dimension, "2d");
});

test("builds a bounded prototype blueprint", () => {
  const result = createGameBlueprint({
    idea: "race a solar skiff through drifting gates",
    dimension: "auto",
    genre: "runner",
    platform: "mobile",
    scope: "micro"
  });

  assert.equal(result.sessionTarget, "30–90 seconds");
  assert.equal(result.contentMinimum.playerAbility.startsWith("One"), true);
  assert.equal(result.buildOrder.length, 3);
  assert.equal(result.outOfScope.includes("Multiplayer and social systems"), true);
});

test("filters the public showcase catalog", () => {
  const result = listShowcases("3d");

  assert.equal(result.showcases.length, 1);
  assert.equal(result.showcases[0]?.id, "golden-gate-bridge");
});

test("identifies a brief that is missing game-critical details", () => {
  const result = validateGameBrief("A beautiful peaceful world with a glowing color palette and ambient music.");

  assert.equal(result.readyForPrototype, false);
  assert.equal(result.missing.includes("core-loop"), true);
  assert.equal(result.missing.includes("controls"), true);
});
