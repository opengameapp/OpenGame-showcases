# OpenGame Showcases

Public browser game showcases generated and curated by [OpenGame](https://opengame.app/).

**Website:** https://opengame.app/

This repository is intentionally small. It contains public showcase material only: playable static HTML examples, prompts, and links to the matching OpenGame pages. It does **not** contain OpenGame production runtime code, deployment configuration, credentials, user data, billing data, or analytics exports.

## Showcases

| Showcase | Type | Play | Prompt | OpenGame page |
| --- | --- | --- | --- | --- |
| [Golden Gate Bridge — 3D Cinematic](showcases/golden-gate-bridge/) | 3D / Three.js / WebGL | [Live demo](https://opengame.app/games/golden_gate_bridge.html) | [Prompt](prompts/golden-gate-bridge.md) | [OpenGame page](https://opengame.app/games/golden-gate-bridge) |
| [Vaporwave Platformer — Night City](showcases/vaporwave-platformer/) | 2D / Platformer / Canvas | [Live demo](https://opengame.app/games/vaporwave-platformer.html) | [Prompt](prompts/vaporwave-platformer.md) | [OpenGame page](https://opengame.app/games/vaporwave-platformer) |

## Run locally

Open the HTML files directly in a browser:

```bash
open showcases/golden-gate-bridge/index.html
open showcases/vaporwave-platformer/index.html
```

The Golden Gate Bridge showcase imports Three.js from jsDelivr. The Vaporwave Platformer is self-contained.

## Remix with OpenGame

Use the prompt files in `prompts/` as starting points, then remix them with OpenGame on the official website:

- [OpenGame homepage](https://opengame.app/)

- [AI Game Maker](https://opengame.app/ai-game-generator/ai-game-maker)
- [AI Game Agent](https://opengame.app/games/ai-game-agent)
- [3D browser games](https://opengame.app/games/3d)

## Future skill area

The `skills/` folder is reserved for public game-generation skills or playbooks after they are reviewed for licensing, privacy, and public identity safety.

## Repository scope

Included:

- Public playable HTML showcases.
- Original prompts used to guide generation.
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
