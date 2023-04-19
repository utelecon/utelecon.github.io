import type { AstroIntegration } from "astro";
import fs from "fs/promises";
import matter from "gray-matter";
import { join, parse } from "path";
import { fileURLToPath } from "url";

export default function redirect(): AstroIntegration {
  return {
    name: "redirect",
    hooks: {
      "astro:build:done": async ({ pages, dir }) => {
        const files = await Promise.all(
          pages.map(async ({ pathname }) => {
            const file = await readPath(pathname);
            return { pathname, file };
          })
        );

        const redirects = files.flatMap(({ pathname, file }) => {
          if (!file) return [];
          const { data } = matter(file);
          const { redirect_from } = data;
          if (typeof redirect_from === "string") {
            return { from: redirect_from, to: pathname };
          }
          if (
            Array.isArray(redirect_from) &&
            redirect_from.every((x) => typeof x === "string")
          ) {
            return redirect_from.map((from) => ({ from, to: pathname }));
          }
          return [];
        });

        const d = fileURLToPath(dir);
        await Promise.all(
          redirects.map(async ({ from, to }) => {
            await fs.mkdir(join(d, from), { recursive: true });
            await fs.writeFile(join(d, from, "index.html"), html(to));
          })
        );
      },
    },
  };
}

async function readPath(path: string) {
  path = join("src", "pages", path);
  if (path.endsWith("/")) {
    path += "index";
  }
  try {
    const md = await fs.readFile(path + ".md", "utf-8");
    return md;
  } catch (_) {}
  try {
    const markdown = await fs.readFile(path + ".markdown", "utf-8");
    return markdown;
  } catch (_) {}
  try {
    const mdx = await fs.readFile(path + ".mdx", "utf-8");
    return mdx;
  } catch (_) {}
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
