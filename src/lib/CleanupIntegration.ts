import type { AstroIntegration } from "astro";
import fs from "fs/promises";
import { basename, extname, join } from "path";
import { fileURLToPath } from "url";

const source = [".md", ".markdown", ".mdx", ".astro"];

export function cleanup(): AstroIntegration {
  return {
    name: "cleanup",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const path = fileURLToPath(dir);
        const promises = [];
        for await (const file of walk(path)) {
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

async function* walk(path: string): AsyncGenerator<string> {
  const entries = await fs.readdir(path, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = join(path, entry.name);
    if (entry.isDirectory()) yield* walk(entryPath);
    else if (entry.isFile()) yield entryPath;
  }
}
