import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import path from "path";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
});
