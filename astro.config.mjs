import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [solidJs()],
  adapter: node({
    mode: "standalone",
  }),
});
