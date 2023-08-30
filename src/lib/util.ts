import fs from "fs/promises";
import { join } from "path";

export async function* walk(path: string): AsyncGenerator<string> {
  const entries = await fs.readdir(path, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = join(path, entry.name);
    if (entry.isDirectory()) yield* walk(entryPath);
    else if (entry.isFile()) yield entryPath;
  }
}
