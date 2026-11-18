import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "/Trabalho-TP2-LPW/",
  build: {
    rollupOptions: {
      input: {
        index: resolve(process.cwd(), "index.html"),
        game: resolve(process.cwd(), "game.html"),
      },
    },
  },
  server: {
    allowedHosts: [".trycloudflare.com"],
    fs: {
      deny: ["**/app.db", "**/app.py", "**/.venv/**", "**/.env*", "**/.git/**", "*.{crt,pem}"],
    },
    proxy: {
      "^/(register|login|logout|me|save)$": "http://127.0.0.1:5000",
    },
  },
});