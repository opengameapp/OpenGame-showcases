# Publishing OpenGame MCP Servers

GitHub is the canonical source for every public OpenGame MCP server. npm and
MCP directories distribute a versioned package; they do not replace the source
repository.

## Current public server

- Source: [`mcp/opengame-browser-game-mcp/`](../mcp/opengame-browser-game-mcp/)
- npm: [`opengame-browser-game-mcp`](https://www.npmjs.com/package/opengame-browser-game-mcp)
- Official registry:
  [`io.github.opengameapp/browser-game`](https://registry.modelcontextprotocol.io/?q=io.github.opengameapp%2Fbrowser-game)

## Before release

1. Keep the server in `mcp/<package-name>/` and ensure it runs over the
   documented transport.
2. Keep the repository discovery manifest at
   `.well-known/mcp/server.json` synchronized with the server's own
   `server.json`. This root-level copy helps repository importers such as
   [LobeHub Market](https://market.lobehub.com/s/publish-mcp) recognize an MCP
   package whose source lives in a monorepo subdirectory; it does not replace
   the explicit registry publishing command below.
3. Run its tests, type check, and package dry run from that directory:

   ~~~bash
   npm test
   npm run check
   npm pack --dry-run
   ~~~

4. Confirm that the package contains no credentials, production endpoints,
   customer data, private prompts, telemetry, or unreviewed third-party code.
5. Merge the reviewed source change to the public default branch before
   publishing the same version externally.

## npm

Publish a new immutable package version only after the source is live:

~~~bash
npm publish --access public
~~~

Verify its public npm package page and its `npx` installation command. Do not
reuse or overwrite an existing version.

## Official MCP Registry

The package's `mcpName` must exactly match the `name` field in `server.json`.
For the OpenGame account, use the `io.github.opengameapp/` namespace only when
the interactive GitHub identity is the `opengameapp` account.

~~~bash
mcp-publisher login github
mcp-publisher publish server.json
~~~

The registry version is immutable. Confirm the entry through the official
registry search API before linking it from public docs. If an entry needs
changes, publish a new semantic version after updating both `package.json` and
`server.json`.

## Directory submissions

Submit a public npm install command and the canonical GitHub URL to MCP
directories that support local stdio servers. Keep the description factual:
state that the server is local, read-only, and credential-free. Do not submit a
Skill as a fake MCP, and do not claim a hosted endpoint when none exists.
