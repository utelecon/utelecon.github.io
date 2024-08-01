import { createHash } from "node:crypto";
import { parse } from "node:path";

import type { PreRenderedAsset } from "rollup";

const IMAGE_EXTS = [
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".svg",
  ".avif",
].flatMap((ext) => [ext, ext.toUpperCase()]);

// This function adds a SHA-1 (base64url) hash to the filename of image assets,
// so that they can later be identified in `scripts/unused-asset.js`.
const assetFileNames = ({ name, source }: PreRenderedAsset): string => {
  if (
    name &&
    IMAGE_EXTS.includes(parse(name).ext) &&
    typeof source !== "string"
  ) {
    return `_astro/${createHash("sha1")
      .update(source)
      .digest("base64url")
      .slice(0, 8)}.[name][extname]`;
  }
  return "_astro/[name].[hash][extname]";
};

export default assetFileNames;
