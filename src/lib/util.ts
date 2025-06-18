import { fileURLToPath } from "node:url";
import { join } from "node:path";

export function getDistFilePath(dir: URL, pathname: string) {
  const base = fileURLToPath(dir);
  
  if (pathname === "/404") {
    return join(base, "404.html");
  }

  // build.format = "directory" なので pathname は /foo/ のようになる
  return join(base, pathname, "index.html");
}