import type { AstroIntegration } from "astro";
import fs from "fs/promises";
import matter from "gray-matter";
import { extname, join, relative } from "path";
import { fileURLToPath } from "url";
import { walk } from "./util";
import { VFile } from "vfile";

const source = [".md", ".markdown", ".mdx", ".astro"];

export default function redirect(): AstroIntegration {
  return {
    name: "redirect",
    hooks: {
      "astro:config:setup": async ({ updateConfig, config }) => {
        const pages = join(fileURLToPath(config.srcDir), "pages");
        const promises: Promise<VFile>[] = [];
        for await (const path of walk(pages)) {
          if (!source.includes(extname(path))) continue;
          promises.push(readFile(path));
        }
        const files = await Promise.all(promises);
        const redirects = files.flatMap((file) => {
          const { redirect_to, redirect_from } = file.data;
          const here = relative(pages, file.path).replace(
            /(?:index)?\.(?:md|mdx|markdown|astro)$/,
            ""
          );
          if (typeof redirect_to === "string") {
            return { from: here, to: redirect_to };
          }
          if (typeof redirect_from === "string") {
            return { from: redirect_from, to: here };
          }
          if (
            Array.isArray(redirect_from) &&
            redirect_from.every((x) => typeof x === "string")
          ) {
            return redirect_from.map((from) => ({ from, to: here }));
          }
          return [];
        });
        updateConfig({
          redirects: Object.fromEntries(
            redirects.map(({ from, to }) => [from, to])
          ),
        });
      },
    },
  };
}

async function readFile(path: string) {
  const value = await fs.readFile(path, "utf-8");
  const { data } = matter(value);
  return new VFile({ path, value, data });
}

function html(to: string) {
  return `\
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=${to}" />
    <link rel="canonical" href="${to}" />
  </head>
  <body>
    <h1>Redirecting...</h1>
    <p>
      If you are not redirected automatically, follow this
      <a href="${to}">link</a>.
    </p>
  </body>
</html>
`;
}
