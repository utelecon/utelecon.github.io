import type { AstroIntegration } from "astro";
import fs from "fs/promises";
import { basename, extname } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";

const source = [".md", ".markdown", ".mdx", ".astro"];

export function cleanup(): AstroIntegration {
  return {
    name: "cleanup",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const path = fileURLToPath(dir);
        const files = await glob("**/*", {
          cwd: path,
          nodir: true,
          absolute: true,
          ignore: "_astro/**/*",
        });
        await Promise.all(
          files.map((file) => {
            if (
              source.includes(extname(file)) ||
              basename(file).startsWith("_")
            ) {
              return fs.rm(file);
            }
          }),
        );
      },
    },
  };
}
