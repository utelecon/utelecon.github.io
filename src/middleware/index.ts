import { sequence } from "astro:middleware";

import { onRequest as externalLinks } from "./externalLinks";

export const onRequest = sequence(externalLinks);
