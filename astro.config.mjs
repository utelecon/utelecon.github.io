import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import blockIALPlugin from "./src/lib/BlockIALPlugin.mjs";
import defaultLayoutPlugin from "./src/lib/DefaultLayoutPlugin.mjs";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      [defaultLayoutPlugin, { defaultLayout: "@layouts/Layout.astro" }],
      blockIALPlugin,
    ],
  },
  integrations: [mdx(), react()],
});
