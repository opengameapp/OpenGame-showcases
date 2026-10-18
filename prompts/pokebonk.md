# PokeBonk: Pocket Survivor — recorded Studio requests

These are the user-authored October 17 requests for the preserved OpenGame artifacts. The generated SPEC and tool loop also influenced the result; this is a reproducible starting point, not a guarantee of identical output.

## Initial approval-ready brief request

Prepare an approval-ready brief for a new game named PokeBonk, subtitle Pocket Survivor. Do not build until the brief is confirmed.

Player experience: a fast, satisfying single-player Pokemon survival challenge inspired by the PokeBonk browser game. This is a new OpenGame fan adaptation with independent code and newly drawn fan art. It is not the original reference game, a card game or whack-a-mole.

Game: an elevated third-person follow camera over a colorful low-poly 3D meadow, with trees, rocks, paths, collision and a few jumpable ledges. Keep movement consistent with the screen, with no camera controls or pointer lock. Choose Pikachu, Charmander or Squirtle, using original simple geometric fan models. Give them visibly distinct automatic attacks: chain spark, ember projectiles and water pulses, and one simple passive each.

Core loop: move, jump and dash to avoid chasing enemy creatures. Attacks auto-target nearby enemies. Defeated enemies drop experience gems that the player must collect. A level-up freezes the game and offers three distinct upgrades; choosing one actually changes damage, attack rate, speed, pickup radius or survivability. Show the old and new values. Make the first upgrade achievable within 20 seconds. Increase wave pressure gradually and cap active enemies for performance.

Run rules: start with full health and a 120-second timer. At 90 seconds, a large stone-golem boss appears with its own health bar and a clear ground-slam warning. Beating it wins. Zero health or the time limit before defeating it loses. Show the actual survival time, kills, level and upgrade list, with Play Again. Clearly display health, XP, level, kills, time and dash cooldown while playing.

Controls: WASD/arrows move, Space jumps, Shift dashes with cooldown and brief invulnerability. On phones, provide a virtual joystick or four holdable direction buttons, plus Jump and Dash. Starter cards, upgrade cards, Start, Pause, Resume, Mute and Play Again must work with mouse, keyboard and touch. Pause and upgrade selection freeze the timer and all simulation. Clear held inputs on blur/pause to prevent stuck movement. Use clear hit and pickup feedback. Start sound muted; optional synthesized sound follows user interaction.

Constraints: self-contained offline HTML game and ZIP, playable in the current OpenGame isolated iframe. Use true 3D positions and perspective; bundle any renderer so no runtime CDN, external model, texture, font or audio is needed. Work at desktop and 390-pixel phone width. Make title, three starters and Start compact and reachable inside the public player. Use accessible HTML controls around the canvas. Guard storage and audio failures so the game still starts; expose read-only gameplay status for observation without test cheats.

Non-goals: multiplayer, accounts, purchases, global rankings, a full roster, copied reference code/layout/sprites, imported official assets or music. Add a short accurate help note: unofficial OpenGame fan adaptation, not affiliated with Nintendo, The Pokemon Company or the reference developer.

Success: all three starters can start; real movement/jump/dash, attacks, damage, kills, collected XP and working upgrades; an honestly winnable boss and real loss; pause truly freezes; Play Again clears all enemies, pickups, attacks, stats, upgrades, clock and held inputs. Verify desktop and phone controls in Studio and the public sandbox. Return the complete brief now without code.

## Boss repair request

Please revise the current PokeBonk: Pocket Survivor game, preserving its existing 3D meadow, three starters, movement, jump, dash and upgrade loop.

The golem currently cannot be hurt: automatic attacks only damage ordinary enemies, so the boss fight cannot be won. Make the golem a real target for all three starters. Chain Spark, Ember projectiles and Water Pulse must each actually reduce its health. Show numeric current and maximum boss health alongside its bar. Defeating the golem must produce a genuine victory result; do not award a win just for reaching the boss or the time limit.

Keep the 120-second run and 90-second boss arrival, but tune boss health and targeting so a normally upgraded starter can beat it in the remaining time. Add a visible direction/distance marker if the boss is outside the camera view, or bring its arrival into view. Reduce excessive grunt pressure during the boss phase if needed. Preserve real health losses, honest timeout/death results, frozen pause/upgrade menus and complete restart cleanup.

Keep the game self-contained and playable with keyboard and phone controls. Extend the existing read-only playtest status to include the selected starter, elapsed time, health, XP, level, kills, current upgrade stats and boss health, without mutation controls or cheats. Please return a complete revised gameplay brief ready to confirm, without code.
