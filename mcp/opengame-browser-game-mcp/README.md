# OpenGame Browser Game MCP

A small, local [Model Context Protocol](https://modelcontextprotocol.io/) server
for agents that help people plan focused, original browser-game prototypes.

**Official website:** [https://opengame.app/](https://opengame.app/)

It exposes four deterministic tools:

- `opengame_list_showcases` — public 2D and 3D OpenGame references with play,
  prompt, and product links.
- `opengame_recommend_browser_runtime` — choose a practical Canvas/DOM or
  Three.js/WebGL starting point.
- `opengame_create_game_blueprint` — create a compact vertical-slice brief,
  controls, core loop, build order, and scope guardrails.
- `opengame_validate_game_brief` — check that a brief covers the loop,
  controls, win, loss/restart, and player feedback.

The server is deliberately local and read-only. It does not call OpenGame
production systems, access user data, send telemetry, require an API key, or
generate code on a user's behalf.

## Install

Install the public [npm package](https://www.npmjs.com/package/opengame-browser-game-mcp)
in an MCP client with:

```json
{
  "mcpServers": {
    "opengame-browser-game": {
      "command": "npx",
      "args": ["-y", "opengame-browser-game-mcp"]
    }
  }
}
```

Node.js 20 or newer is required.

The server is also published as
[`io.github.opengameapp/browser-game`](https://registry.modelcontextprotocol.io/?q=io.github.opengameapp%2Fbrowser-game)
in the Official MCP Registry and listed on
[LobeHub Market](https://lobehub.com/mcp/opengameapp-opengame-showcases).

## Local development

```bash
npm install
npm test
npm run check
npm start
```

Use the MCP Inspector to exercise the server interactively:

```bash
npx @modelcontextprotocol/inspector node dist/index.js
```

## Source and showcases

The public source, prompts, and browser-game references live in
[OpenGame Showcases](https://github.com/opengameapp/OpenGame-showcases).

For a hosted AI game-making workflow, see
[OpenGame AI Game Maker](https://opengame.app/ai-game-generator/ai-game-maker).

## License

[MIT](LICENSE)
