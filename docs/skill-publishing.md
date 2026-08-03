# Publishing OpenGame Skills

Public Skill ownership has moved to the dedicated
[opengameapp/OpenGame-skills](https://github.com/opengameapp/OpenGame-skills)
repository. This Showcases repository no longer accepts new Skills or Skill
version updates.

Use the maintained repository for source changes, validation, installation,
and release instructions:

~~~bash
npx skills add opengameapp/OpenGame-skills \
  --skill opengame-browser-game-builder
~~~

GitHub remains the source of truth. ClawHub publication is performed through
its authenticated web Import flow from `opengameapp/OpenGame-skills`, after the
reviewed source commit is public. Do not use a locally bound personal GitHub
identity as a substitute.

The legacy Skill folder remains here only until existing marketplace source
links have migrated and been verified. Remove it in a later, separately
reviewed cleanup; do not delete it while a public listing still depends on it.
