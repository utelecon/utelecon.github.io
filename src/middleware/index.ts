import { sequence } from "astro:middleware";

import externalLinks from "./externalLinks";

export const onRequest = sequence(externalLinks);
