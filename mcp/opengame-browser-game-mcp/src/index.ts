import { serveStdio } from "@modelcontextprotocol/server/stdio";

import { createServer } from "./server.js";

console.error("OpenGame Browser Game MCP running on stdio");
void serveStdio(createServer);
