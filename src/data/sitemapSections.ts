export interface SitemapSection {
  patterns?: RegExp[];
  negativePatterns?: RegExp[];
  heading: `h${1 | 2 | 3 | 4 | 5 | 6}`;
  name: Record<string, string>;
}

export const sitemapSections: SitemapSection[] = [
  {
    patterns: [/^\/oc($|\/)/],
    heading: "h2",
    name: {
      ja: "オンライン授業全般（学生向け）",
      en: "Online Classes (for students)",
    },
  },
  {
    patterns: [/^\/faculty_members($|\/)/],
    heading: "h2",
    name: {
      ja: "オンライン授業全般（教員向け）",
      en: "Online Classes (for faculty members)",
    },
  },
  {
    patterns: [/^\/systems($|\/)/],
    heading: "h2",
    name: {
      ja: "東京大学のシステム",
      en: "ICT systems",
    },
  },
  {
    patterns: [/^\/utokyo_account($|\/)/],
    heading: "h3",
    name: {
      ja: "UTokyo Account",
      en: "UTokyo Account",
    },
  },
  {
    patterns: [/^\/utas$/],
    heading: "h3",
    name: {
      ja: "UTAS",
      en: "UTAS",
    },
  },
  {
    patterns: [
      /^\/itc_lms$/,
      /^\/lms_lecturers($|\/)/,
      /^\/lms_students($|\/)/,
    ],
    heading: "h3",
    name: {
      ja: "ITC-LMS",
      en: "ITC-LMS",
    },
  },
  {
    patterns: [/^\/zoom($|\/)/],
    heading: "h3",
    name: {
      ja: "Zoom",
      en: "Zoom",
    },
  },
  {
    patterns: [/^\/webex($|\/)/],
    heading: "h3",
    name: {
      ja: "Webex",
      en: "Webex",
    },
  },
  {
    patterns: [/^\/eccs_cloud_email$/],
    heading: "h3",
    name: {
      ja: "ECCSクラウドメール (Google Workspace)",
      en: "ECCS Cloud Email",
    },
  },
  {
    patterns: [/^\/microsoft($|\/)/],
    heading: "h3",
    name: {
      ja: "UTokyo Microsoft License",
      en: "UTokyo Microsoft License",
    },
  },
  {
    patterns: [/^\/utokyo_wifi($|\/)/],
    heading: "h3",
    name: {
      ja: "UTokyo Wi-Fi",
      en: "UTokyo Wi-Fi",
    },
  },
  {
    patterns: [/^\/slack($|\/)/],
    heading: "h3",
    name: {
      ja: "UTokyo Slack",
      en: "UTokyo Slack",
    },
  },
  {
    patterns: [/^\/slido($|\/)/],
    heading: "h3",
    name: {
      ja: "Slido",
      en: "Slido",
    },
  },
  {
    patterns: [/^\/utokyo_vpn($|\/)/],
    heading: "h3",
    name: {
      ja: "UTokyo VPN",
      en: "UTokyo VPN",
    },
  },
  {
    patterns: [/^\/online($|\/)/, /^\/articles\//],
    heading: "h2",
    name: {
      ja: "オンラインを活用するために",
      en: "Teaching Excellence",
    },
  },
  {
    patterns: [/^\/good-practice($|\/)/],
    heading: "h3",
    name: {
      ja: "グッドプラクティスの共有",
      en: "Good Practice",
    },
  },
  {
    patterns: [/^\/notice($|\/)/],
    heading: "h2",
    name: {
      ja: "お知らせ",
      en: "Notice",
    },
  },
  {
    patterns: [/^\/events($|\/)/],
    negativePatterns: [/\/events\/luncheon($|\/)/],
    heading: "h2",
    name: {
      ja: "イベント・説明会等",
      en: "Orientations / Seminars",
    },
  },
  {
    patterns: [/^\/events\/luncheon($|\/)/],
    heading: "h3",
    name: {
      ja: "オンライン授業情報交換会",
      en: "Lunch time information exchange meeting",
    },
  },
  {
    patterns: [/.*/],
    heading: "h2",
    name: {
      ja: "その他",
      en: "Others",
    },
  },
];
