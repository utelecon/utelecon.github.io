import type { AstroIntegration } from "astro";
import fs from "fs/promises";
import { basename, extname } from "path";
import { fileURLToPath } from "url";
import { globIterate } from "glob";

const source = [".md", ".markdown", ".mdx", ".astro"];

export function cleanup(): AstroIntegration {
  return {
    name: "cleanup",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const path = fileURLToPath(dir);
        const promises = [];
        const files = globIterate("**/*", { cwd: path, nodir: true, absolute: true});
        for await (const file of files){
          if (
            source.includes(extname(file)) ||
            basename(file).startsWith("_")
          ) {
            promises.push(fs.rm(file));
          }
        }
        await Promise.all(promises);
      },
    },
  };
}
