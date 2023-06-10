import { defineConfig } from "vite";
import { resolve } from "path";

const root = resolve(__dirname, "src");
export default defineConfig({
  root,
  build: {
    outDir: resolve(__dirname, "dist"),
  },
  server: {
    port: 3000,
  },
});
