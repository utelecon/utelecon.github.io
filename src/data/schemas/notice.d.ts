export interface Notice {
  date: Date;
  content: {
    ja?: string;
    en?: string;
  };
  important?: boolean;
}
