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

export function getISODateString(date: Date) {
  return date.toISOString().split("T")[0];
}

export function getLocaleDateString(
  date: Date,
  locales?: Intl.LocalesArgument,
  options?: Intl.DateTimeFormatOptions | Intl.DateTimeFormatOptions["dateStyle"]
) {
  return date.toLocaleDateString(
    locales,
    options === undefined || typeof options !== "string"
      ? options
      : { dateStyle: options }
  );
}
