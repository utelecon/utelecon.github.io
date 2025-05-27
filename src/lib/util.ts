import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { parse as parsePath } from "path";

export function getDistFilePath(dir: URL, pathname: string, component: string) {
  const base = fileURLToPath(dir);
  
  if (pathname === "/404") {
    return join(base, "404.html");
  }

  if (parsePath(component).name === "index") {
    return join(base, pathname, "index.html");
  }

  return join(base, pathname + ".html");
}