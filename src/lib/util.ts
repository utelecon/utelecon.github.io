import { fileURLToPath } from "node:url";
import { join, parse as parsePath } from "node:path";

export function getDistFilePath(dir: URL, pathname: string, component: string) {
  const base = fileURLToPath(dir);

  if (pathname === "/404") {
    return join(base, "404.html");
  }

  const { name, ext } = parsePath(component);

  if (name === "index" && ext && pathname !== component) {
    return join(base, pathname, "index.html");
  }

  return join(base, `${pathname}.html`);
}
