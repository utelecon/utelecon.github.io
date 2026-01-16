export interface Navigation {
  name: string;
  sitemap?: {
    section: boolean;
    parent?: never;
  };
  contents: {
    name: string;
    url: string;
    hidden?: boolean;
    sitemap?: {
      section?: boolean;
      parent?: string;
    };
  }[];
}
