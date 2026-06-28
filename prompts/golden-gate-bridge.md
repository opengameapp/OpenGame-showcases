# Golden Gate Bridge — 3D Cinematic — Prompt

Objective
Build a visually stunning, high‑fidelity 3D voxel‑style simulation of the Golden Gate Bridge in Three.js.
Prioritize complex visuals (not simple blocks), strong atmosphere depth, and smooth ~60 FPS.

Visuals & Atmosphere
- Lighting: a Time‑of‑day slider (0–24h) that controls sun position, intensity, sky color, and fog tint.
- Fog: volumetric‑feeling fog using lightweight sprite particles; slider 0–100 (0 = crystal clear, 100 = dense but not pure whiteout).
- Water: custom shader for waves + specular reflections; blend horizon with distance‑based fog (exp2) so the far water merges naturally.
- Post: ACES filmic tone mapping + optimized bloom (night lights glow but keep performance).

Scene Details
- Bridge: recognizable art‑deco towers, main span cables + suspenders, piers/anchors consistent with suspension bridge structure.
- Terrain: simple but convincing Marin Headlands + SF side peninsula silhouettes.
- Skyline: procedural/instanced city blocks on the SF side to suggest depth.
- Traffic: up to ~400 cars via InstancedMesh, properly aligned on the deck (avoid clipping). Headlights/taillights emissive at night.
- Ships: a few procedural cargo ships with navigation lights moving across the bay.
- Nature: a small flock of animated birds (lightweight flocking).

Night Mode
At night, enable city lights, bridge beacons, street lights, vehicle lights, ship nav lights.

Tech & Controls (Important)
- Output MUST be a single self‑contained HTML file (e.g., golden_gate_bridge.html) that runs by opening in Chrome.
- No build tools (no Vite/Webpack). Pure HTML + JS.
- Import Three.js and addons via CDN using ES Modules + importmap.
- UI: nice‑looking sliders for Time (0–24), Fog Density (0–100), Traffic Density (0–100), Camera Zoom.
- Optimization: use InstancedMesh for repeated items (cars/lights/birds), avoid heavy geometry, keep draw calls low.
