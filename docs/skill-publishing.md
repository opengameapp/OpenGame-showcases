# Publishing OpenGame Skills

GitHub is the canonical source for every public OpenGame skill. ClawHub and
other directories are distribution channels, not separate sources of truth.

## Add or update a skill

1. Keep each independently useful workflow in `skills/<skill-slug>/`.
2. Include a concise `SKILL.md`; add only the references, scripts, or assets
   needed for that workflow.
3. Review the package for licensing, privacy, public identity safety, and
   accurate product links.
4. Validate the package before opening a pull request:

   ~~~bash
   python /path/to/skill-creator/scripts/quick_validate.py skills/<skill-slug>
   ~~~

5. Merge the reviewed GitHub change before publishing the matching release
   elsewhere.

## Versioning

Give each ClawHub slug an independent semantic version:

- Patch: wording fixes, link corrections, or non-breaking quality improvements.
- Minor: backward-compatible workflows, references, or useful new guidance.
- Major: a renamed slug, removed behavior, or an incompatible workflow change.

Record the Git commit and the external release URL in the pull request or
GitHub release notes. Do not edit a published catalog copy and forget to bring
the change back to this repository.

## Skills.sh

The repository is directly installable after the Skill change is merged to its
public default branch:

~~~bash
npx skills add opengameapp/OpenGame-showcases \
  --skill opengame-browser-game-builder
~~~

Skills.sh discovers public GitHub source and can display an install badge.
Add the badge only after the source is live and the repository page resolves.

## LobeHub Market

The current public listing is [OpenGame Browser Game Builder](https://market.lobehub.com/s/skills/opengameapp-opengame-showcases-opengame-browser-game-builder).
LobeHub first imports the canonical public GitHub repository, then lets the
connected GitHub owner claim the resulting listing and upload versioned Skill
packages. Keep the repository owner and the connected GitHub identity aligned.

## ClawHub

The current public listing is [OpenGame Browser Game Builder](https://clawhub.ai/opengameapp/skills/opengame-browser-game-builder).

Publish a reviewed skill folder with its stable slug and next version:

~~~bash
npm i -g clawhub
clawhub login
clawhub skill publish ./skills/opengame-browser-game-builder \
  --slug opengame-browser-game-builder \
  --version 0.1.0 \
  --changelog "Initial public release" \
  --source-repo opengameapp/OpenGame-showcases \
  --source-commit <merged-commit-sha> \
  --source-path skills/opengame-browser-game-builder \
  --dry-run
~~~

Review the dry run, then remove `--dry-run` to create the release. Wait for
the listing and its scan or moderation status before linking it from the root
README. For later releases, publish the changed folder with its next semantic
version; do not create a new slug for ordinary maintenance.

## Release checklist

- The skill works without production credentials or internal services.
- Every external link is public and relevant to the workflow.
- Examples do not contain private prompts, customer data, copyrighted assets,
  or misleading product claims.
- The `SKILL.md` validator passes.
- The GitHub diff is reviewed before external publication.
