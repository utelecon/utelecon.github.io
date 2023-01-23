import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import defaultLayoutPlugin from "./src/lib/DefaultLayoutPlugin.mjs";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      [defaultLayoutPlugin, { defaultLayout: "@layouts/Layout.astro" }],
    ],
  },
  integrations: [mdx()],
});
