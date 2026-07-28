export type GameDimension = "2d" | "3d" | "auto";
export type GameGenre =
  | "arcade"
  | "platformer"
  | "puzzle"
  | "runner"
  | "strategy"
  | "exploration"
  | "other";
export type TargetPlatform = "desktop" | "mobile" | "cross-platform";
export type PrototypeScope = "micro" | "mvp";

export interface BrowserRuntimeInput {
  dimension: GameDimension;
  genre: GameGenre;
  platform: TargetPlatform;
  idea?: string;
}

export interface GameBlueprintInput extends BrowserRuntimeInput {
  idea: string;
  scope: PrototypeScope;
  visualStyle?: string;
}

interface Showcase {
  id: string;
  title: string;
  dimension: "2d" | "3d";
  tags: string[];
  playUrl: string;
  promptUrl: string;
  productUrl: string;
  summary: string;
}

const showcases: readonly Showcase[] = [
  {
    id: "golden-gate-bridge",
    title: "Golden Gate Bridge — 3D Cinematic",
    dimension: "3d",
    tags: ["three.js", "webgl", "cinematic", "procedural"],
    playUrl: "https://opengame.app/games/golden_gate_bridge.html",
    promptUrl:
      "https://github.com/opengameapp/OpenGame-showcases/blob/main/prompts/golden-gate-bridge.md",
    productUrl: "https://opengame.app/games/golden-gate-bridge",
    summary:
      "A lightweight 3D browser showcase centered on atmosphere, camera framing, and repeated-object performance discipline."
  },
  {
    id: "vaporwave-platformer",
    title: "Vaporwave Platformer — Night City",
    dimension: "2d",
    tags: ["canvas", "platformer", "arcade", "pixel-art"],
    playUrl: "https://opengame.app/games/vaporwave-platformer.html",
    promptUrl:
      "https://github.com/opengameapp/OpenGame-showcases/blob/main/prompts/vaporwave-platformer.md",
    productUrl: "https://opengame.app/games/vaporwave-platformer",
    summary:
      "A focused 2D platformer showcase with a readable movement loop and a strong visual direction."
  }
];

const loopByGenre: Record<GameGenre, string[]> = {
  arcade: [
    "Read the immediate playfield.",
    "Move, aim, or dodge in short bursts.",
    "Collect points or clear one threat pattern.",
    "Escalate pace until a clear win or loss state."
  ],
  platformer: [
    "Read the next route and hazard.",
    "Run, jump, and use one movement ability.",
    "Reach a checkpoint or pickup that confirms progress.",
    "Finish the compact route or restart after a fall."
  ],
  puzzle: [
    "Read a small, fully visible puzzle state.",
    "Manipulate one rule or object type.",
    "Receive immediate feedback on the new state.",
    "Open the exit or reset after an invalid approach."
  ],
  runner: [
    "Read the approaching obstacle pattern.",
    "Time a lane change, jump, slide, or boost.",
    "Collect a score or combo signal.",
    "Reach a short distance goal or recover from a collision."
  ],
  strategy: [
    "Read one tactical board or lane.",
    "Commit a limited action or placement.",
    "Observe a short enemy or simulation response.",
    "Secure the objective before the pressure meter expires."
  ],
  exploration: [
    "Read one landmark and a nearby point of interest.",
    "Navigate using a simple movement verb.",
    "Discover one interaction or collectible.",
    "Reach the landmark or return to a clear goal marker."
  ],
  other: [
    "Show the player one readable objective.",
    "Let the player use one primary action.",
    "Make the action cause visible progress or resistance.",
    "End in a reachable win, loss, or restart state."
  ]
};

const runtimeBy2DGenre: Record<GameGenre, string> = {
  arcade: "Canvas 2D",
  platformer: "Canvas 2D",
  puzzle: "DOM + CSS or Canvas 2D",
  runner: "Canvas 2D",
  strategy: "DOM + CSS or Canvas 2D",
  exploration: "Canvas 2D",
  other: "Canvas 2D"
};

function compactText(value: string, maximum: number): string {
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim().slice(0, maximum);
}

function shouldUseThreeJs(input: BrowserRuntimeInput): boolean {
  if (input.dimension === "3d") {
    return true;
  }
  if (input.dimension === "2d") {
    return false;
  }

  const spatialLanguage =
    /\b(3d|three\.js|webgl|first[- ]person|third[- ]person|camera|terrain|flight|driving|space|spatial|voxel)\b|三维|立体|第一人称|第三人称|相机|地形|飞行|驾驶|太空|空间|体素/i;
  return input.genre === "exploration" || spatialLanguage.test(input.idea ?? "");
}

export function recommendBrowserRuntime(input: BrowserRuntimeInput) {
  const usesThreeJs = shouldUseThreeJs(input);
  const platformNotes: Record<TargetPlatform, string> = {
    desktop: "Prioritize keyboard and pointer controls, while keeping the first session under three minutes.",
    mobile: "Prioritize thumb reach, tap targets, and a layout that remains readable in the intended screen orientation.",
    "cross-platform": "Support keyboard/pointer plus a compact touch fallback; do not make either input mode mandatory."
  };

  if (usesThreeJs) {
    return {
      runtime: "Three.js / WebGL",
      dimension: "3d",
      rationale:
        "Spatial navigation, camera framing, lighting, or depth appears central to this concept. Use a small scene and instance repeated objects before adding detail.",
      implementationNotes: [
        "Start with one navigable play space and a single camera mode.",
        "Use simple collision volumes and a capped object count for the first slice.",
        "Use instancing or pooled objects for repeated scenery, hazards, or collectibles.",
        platformNotes[input.platform]
      ]
    };
  }

  return {
    runtime: runtimeBy2DGenre[input.genre],
    dimension: "2d",
    rationale:
      "The concept can prove its core interaction quickly with a readable 2D playfield and low setup cost.",
    implementationNotes: [
      "Keep one screen, route, board, or arena playable before adding secondary systems.",
      "Represent state with a small HUD: score, health, timer, or progress only when it informs a decision.",
      "Reuse sprites, particles, and collision objects rather than growing arrays without bounds.",
      platformNotes[input.platform]
    ]
  };
}

export function createGameBlueprint(input: GameBlueprintInput) {
  const idea = compactText(input.idea, 320);
  const visualStyle = input.visualStyle ? compactText(input.visualStyle, 160) : undefined;
  const runtime = recommendBrowserRuntime(input);
  const controls: Record<TargetPlatform, string[]> = {
    desktop: ["Keyboard movement or primary action", "Pointer for menus or aiming", "Visible restart shortcut"],
    mobile: ["Large tap targets or a simple virtual control", "One primary gesture", "Visible restart button"],
    "cross-platform": [
      "Keyboard movement or primary action",
      "Pointer or touch for menus and aiming",
      "A touch fallback that mirrors the essential desktop action",
      "Visible restart control"
    ]
  };
  const buildOrder = [
    "Create a start state that names the objective and controls.",
    "Implement the core loop in one compact level, arena, or board.",
    "Add observable progress plus an explicit win, loss, and restart state.",
    "Tune input responsiveness and contrast before adding more content."
  ];
  if (input.scope === "micro") {
    buildOrder.splice(3, 1);
  }

  return {
    concept: idea,
    scope: input.scope,
    playerFantasy: `In a short browser session, the player gets to ${idea}.`,
    coreLoop: loopByGenre[input.genre],
    runtime,
    controls: controls[input.platform],
    sessionTarget: input.scope === "micro" ? "30–90 seconds" : "1–3 minutes",
    contentMinimum: {
      playerAbility: "One primary action with an immediately visible effect.",
      pressure: "One meaningful obstacle, opponent, constraint, or puzzle rule.",
      goal: "One explicit finish condition that a first-time player can reach.",
      progressSignal: "One score, health, timer, collection, or milestone signal."
    },
    visualDirection:
      visualStyle ??
      "Use a tight palette, clear silhouettes, and high interaction contrast; prefer procedural shapes when asset provenance is unclear.",
    buildOrder,
    outOfScope: [
      "Multiplayer and social systems",
      "Large procedural worlds or long narrative campaigns",
      "Shops, economies, and inventories beyond the core loop",
      "Unlicensed characters, brands, or copied art direction"
    ],
    handoff: {
      ask: "Use this blueprint as the implementation brief; make every listed player action produce visible feedback.",
      optionalHostedWorkflow: "https://opengame.app/ai-game-generator/ai-game-maker"
    }
  };
}

export function listShowcases(dimension?: "2d" | "3d") {
  const selected = dimension ? showcases.filter((showcase) => showcase.dimension === dimension) : showcases;
  return {
    source: "https://github.com/opengameapp/OpenGame-showcases",
    showcases: selected
  };
}

export function validateGameBrief(brief: string) {
  const normalized = compactText(brief, 6000).toLowerCase();
  const checks = [
    {
      id: "core-loop",
      label: "Core loop",
      status:
        /\b(loop|collect|dodge|jump|shoot|match|navigate|avoid|move|build|race|place)\b|循环|收集|躲避|跳跃|射击|匹配|导航|移动|建造|竞速|放置|攻击|探索/.test(
          normalized
        )
          ? "pass"
          : "needs-work",
      guidance: "Name the repeated player actions and their visible consequence."
    },
    {
      id: "controls",
      label: "Controls",
      status: /\b(control|keyboard|mouse|touch|tap|swipe|arrow|wasd|click)\b|控制|键盘|鼠标|触摸|点击|滑动|方向键|按键/.test(
        normalized
      )
        ? "pass"
        : "needs-work",
      guidance: "State how the player moves, aims, selects, or performs the primary action."
    },
    {
      id: "win-condition",
      label: "Win condition",
      status: /\b(win|goal|finish|complete|reach|exit)\b|胜利|获胜|目标|完成|到达|出口|通关/.test(normalized)
        ? "pass"
        : "needs-work",
      guidance: "State a small, reachable condition that ends a successful session."
    },
    {
      id: "loss-or-restart",
      label: "Loss or restart",
      status:
        /\b(loss|fail|game over|health|timer|lives|die|restart)\b|失败|游戏结束|生命|血量|计时|复活|重开|重新开始|死亡/.test(
          normalized
        )
          ? "pass"
          : "needs-work",
      guidance: "Explain failure, recovery, or a reliable restart path."
    },
    {
      id: "feedback",
      label: "Observable feedback",
      status: /\b(score|health|timer|progress|feedback|sound|particle|hud|combo)\b|分数|生命|血量|计时|进度|反馈|音效|粒子|连击/.test(
        normalized
      )
        ? "pass"
        : "needs-work",
      guidance: "Include at least one clear progress or interaction signal."
    }
  ] as const;
  const missing = checks.filter((check) => check.status === "needs-work").map((check) => check.id);

  return {
    readyForPrototype: missing.length <= 1,
    checks,
    missing,
    nextStep:
      missing.length === 0
        ? "Build the smallest complete loop first, then test a win, loss, and restart path."
        : "Resolve the missing checks before expanding content, art detail, or secondary systems."
  };
}
