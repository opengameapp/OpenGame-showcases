import { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod/v4";

import {
  createGameBlueprint,
  listShowcases,
  recommendBrowserRuntime,
  validateGameBrief
} from "./catalog.js";

const version = "0.1.0";

function result(value: unknown) {
  return {
    content: [{ type: "text" as const, text: JSON.stringify(value, null, 2) }],
    structuredContent: value
  };
}

export function createServer() {
  const server = new McpServer({
    name: "opengame-browser-game-mcp",
    version
  });

  server.registerTool(
    "opengame_list_showcases",
    {
      title: "List public OpenGame browser-game showcases",
      description:
        "Returns public OpenGame browser-game references, their play links, prompt sources, dimensions, and implementation themes.",
      inputSchema: {
        dimension: z.enum(["2d", "3d"]).optional().describe("Optional showcase dimension filter.")
      }
    },
    async ({ dimension }) => result(listShowcases(dimension))
  );

  server.registerTool(
    "opengame_recommend_browser_runtime",
    {
      title: "Recommend a browser-game runtime",
      description:
        "Chooses a practical 2D Canvas/DOM or 3D Three.js/WebGL starting point for a focused browser-game vertical slice.",
      inputSchema: {
        dimension: z.enum(["2d", "3d", "auto"]).default("auto"),
        genre: z
          .enum(["arcade", "platformer", "puzzle", "runner", "strategy", "exploration", "other"])
          .default("other"),
        platform: z.enum(["desktop", "mobile", "cross-platform"]).default("cross-platform"),
        idea: z.string().max(320).optional().describe("A short description used only to assess spatial requirements.")
      }
    },
    async (input) => result(recommendBrowserRuntime(input))
  );

  server.registerTool(
    "opengame_create_game_blueprint",
    {
      title: "Create a compact browser-game blueprint",
      description:
        "Creates an implementation-ready vertical-slice brief with core loop, runtime recommendation, controls, build order, and scope guardrails. It does not generate code or call a hosted service.",
      inputSchema: {
        idea: z.string().min(3).max(320).describe("The original game concept to scope."),
        dimension: z.enum(["2d", "3d", "auto"]).default("auto"),
        genre: z
          .enum(["arcade", "platformer", "puzzle", "runner", "strategy", "exploration", "other"])
          .default("other"),
        platform: z.enum(["desktop", "mobile", "cross-platform"]).default("cross-platform"),
        scope: z.enum(["micro", "mvp"]).default("mvp"),
        visualStyle: z.string().max(160).optional().describe("Optional visual direction, not a request for copied art.")
      }
    },
    async (input) => result(createGameBlueprint(input))
  );

  server.registerTool(
    "opengame_validate_game_brief",
    {
      title: "Validate a browser-game brief",
      description:
        "Checks whether a game brief identifies a loop, controls, win condition, loss/restart path, and visible feedback before implementation begins.",
      inputSchema: {
        brief: z.string().min(20).max(6000).describe("The game brief to evaluate.")
      }
    },
    async ({ brief }) => result(validateGameBrief(brief))
  );

  return server;
}
