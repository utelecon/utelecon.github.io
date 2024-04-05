import type { AstroIntegration } from "astro";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import { glob } from "glob";

export function cleanup(): AstroIntegration {
  return {
    name: "cleanup",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const path = fileURLToPath(dir);
        const files = await glob(`${path}/**/*.{md,markdown,mdx,astro}`);
        await Promise.all(files.map(async (file) => fs.rm(file)));
      },
    },
  };
}
