# Publishing OpenGame MCP Servers

GitHub is the canonical source for every public OpenGame MCP server. npm and
MCP directories distribute a versioned package; they do not replace the source
repository.

## Before release

1. Keep the server in `mcp/<package-name>/` and ensure it runs over the
   documented transport.
2. Run its tests, type check, and package dry run from that directory:

   ~~~bash
   npm test
   npm run check
   npm pack --dry-run
   ~~~

3. Confirm that the package contains no credentials, production endpoints,
   customer data, private prompts, telemetry, or unreviewed third-party code.
4. Merge the reviewed source change to the public default branch before
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
