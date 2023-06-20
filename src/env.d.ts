/// <reference types="astro/client" />

declare module "*.yml" {
  const content: any;
  export default content;
}
