# OpenGame Showcases

Public browser-game showcases from [OpenGame](https://opengame.app/).

**Website:** https://opengame.app/

## Featured preview

[![Golden Gate Bridge — 3D Cinematic gameplay preview](assets/golden-gate-bridge-poster.webp)](https://opengame.app/games/golden_gate_bridge.html)

**Golden Gate Bridge — 3D Cinematic**

Click the poster to play the live demo, or watch the [video preview](https://cdn.ai-game-generator.com/public/golden_gate_bridge.mp4).

This repository is intentionally small. It contains public showcase material only: playable static HTML examples, prompts, and links to the matching OpenGame pages. It does **not** contain OpenGame production runtime code, deployment configuration, credentials, user data, billing data, or analytics exports.

## Showcases

| Showcase | Type | Play | Video | Prompt | OpenGame page |
| --- | --- | --- | --- | --- | --- |
| [Golden Gate Bridge — 3D Cinematic](showcases/golden-gate-bridge/) | 3D / Three.js / WebGL | [Live demo](https://opengame.app/games/golden_gate_bridge.html) | [Video preview](https://cdn.ai-game-generator.com/public/golden_gate_bridge.mp4) | [Prompt](prompts/golden-gate-bridge.md) | [OpenGame page](https://opengame.app/games/golden-gate-bridge) |
| [Vaporwave Platformer — Night City](showcases/vaporwave-platformer/) | 2D / Platformer / Canvas | [Live demo](https://opengame.app/games/vaporwave-platformer.html) | — | [Prompt](prompts/vaporwave-platformer.md) | [OpenGame page](https://opengame.app/games/vaporwave-platformer) |

## Run locally

Open the HTML files directly in a browser:

~~~bash
open showcases/golden-gate-bridge/index.html
open showcases/vaporwave-platformer/index.html
~~~

The Golden Gate Bridge showcase imports Three.js from jsDelivr. The Vaporwave Platformer is self-contained.

## OpenGame Skills

Reusable public Skills now have a dedicated canonical repository:
[opengameapp/OpenGame-skills](https://github.com/opengameapp/OpenGame-skills).
Install them from that source:

~~~bash
npx skills add opengameapp/OpenGame-skills \
  --skill opengame-browser-game-builder

npx skills add opengameapp/OpenGame-skills \
  --skill opengame-marketplace-publisher
~~~

The legacy [`skills/`](skills/) folder is retained temporarily so existing
marketplace source links do not break during migration. New Skills and future
versions are maintained only in the dedicated repository. See its
[Skill catalog](https://github.com/opengameapp/OpenGame-skills#skill-catalog).

## OpenGame MCP servers

The [`mcp/`](mcp/) directory contains independently installable Model Context
Protocol servers. The first server, [OpenGame Browser Game
MCP](mcp/opengame-browser-game-mcp/), gives AI clients deterministic tools to
scope a browser-game vertical slice, choose Canvas/DOM or Three.js/WebGL,
validate a brief, and discover these public showcases. It is local, read-only,
requires no API key, and never connects to OpenGame production systems.

Install it from the
[public npm package](https://www.npmjs.com/package/opengame-browser-game-mcp)
or find `io.github.opengameapp/browser-game` in the
[Official MCP Registry](https://registry.modelcontextprotocol.io/?q=io.github.opengameapp%2Fbrowser-game).
It is also listed on
[LobeHub Market](https://lobehub.com/mcp/opengameapp-opengame-showcases).
See [the MCP publishing guide](docs/mcp-publishing.md) for the versioned
release process.

## Remix with OpenGame

Use the prompt files in `prompts/` as starting points, then remix them with OpenGame on the official website:

- [OpenGame homepage](https://opengame.app/)

- [AI Game Maker](https://opengame.app/ai-game-generator/ai-game-maker)
- [AI Game Agent](https://opengame.app/games/ai-game-agent)
- [3D browser games](https://opengame.app/games/3d)

## Repository scope

Included:

- Public playable HTML showcases.
- Original prompts used to guide generation.
- Links to the dedicated public OpenGame Skills catalog.
- Links to matching OpenGame live demos and detail pages.

Not included:

- Proprietary OpenGame app/runtime source.
- Production secrets, API keys, cookies, user records, analytics, payments, or deployment config.
- Private prompts or customer-generated content.

## License

MIT for the showcase material in this repository. Third-party runtime libraries loaded by examples remain under their own licenses.

## Contact

Product support: support@opengame.app  
General contact: hello@opengame.app
