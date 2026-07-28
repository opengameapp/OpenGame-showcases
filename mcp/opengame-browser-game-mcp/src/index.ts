#!/usr/bin/env node

import { serveStdio } from "@modelcontextprotocol/server/stdio";

import { createServer } from "./server.js";

console.error("OpenGame Browser Game MCP running on stdio");
serveStdio(createServer, {
  onerror: (error) => console.error(`OpenGame Browser Game MCP error: ${error.message}`)
});
