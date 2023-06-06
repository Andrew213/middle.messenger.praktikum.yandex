import { defineConfig } from "vite";
import { resolve } from "path";
import pugPlugin from "vite-plugin-pug";
import fs from "fs";

// fs.writeFile("src/components/test.pug", "jopa", (err) => {
//   if (err) throw err;
// });
const root = resolve(__dirname, "src");
export default defineConfig({
  plugins: [pugPlugin()],
  root,
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "inde2x.html"),
        about: resolve(root, "about", "index.html"),
      },
    },
  },
  server: {
    port: 3000,
  },
});
