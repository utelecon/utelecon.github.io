export interface SitemapSection {
  patterns: RegExp[];
  negativePatterns?: RegExp[];
  depth: 1 | 2 | 3 | 4 | 5 | 6;
  name: string;
}

export const sitemapSectionsJa: SitemapSection[] = [
  {
    patterns: [/^\/oc($|\/)/],
    depth: 2,
    name: "オンライン授業全般（学生向け）",
  },
  {
    patterns: [/^\/faculty_members($|\/)/],
    depth: 2,
    name: "オンライン授業全般（教員向け）",
  },
  {
    patterns: [/^\/systems($|\/)/],
    depth: 2,
    name: "東京大学のシステム",
  },
  {
    patterns: [/^\/utokyo_account($|\/)/],
    depth: 3,
    name: "UTokyo Account",
  },
  {
    patterns: [/^\/utas$/],
    depth: 3,
    name: "UTAS",
  },
  {
    patterns: [/^\/utol($|\/)/],
    depth: 3,
    name: "UTOL",
  },
  {
    patterns: [/^\/zoom($|\/)/],
    depth: 3,
    name: "Zoom",
  },
  {
    patterns: [/^\/webex($|\/)/],
    depth: 3,
    name: "Webex",
  },
  {
    patterns: [/^\/google($|\/)/],
    depth: 3,
    name: "ECCSクラウドメール (Google Workspace)",
  },
  {
    patterns: [/^\/microsoft($|\/)/],
    depth: 3,
    name: "UTokyo Microsoft License",
  },
  {
    patterns: [/^\/utokyo_wifi($|\/)/],
    depth: 3,
    name: "UTokyo Wi-Fi",
  },
  {
    patterns: [/^\/slack($|\/)/],
    depth: 3,
    name: "UTokyo Slack",
  },
  {
    patterns: [/^\/slido($|\/)/],
    depth: 3,
    name: "Slido",
  },
  {
    patterns: [/^\/utokyo_vpn($|\/)/],
    depth: 3,
    name: "UTokyo VPN",
  },
  {
    patterns: [/^\/eccs($|\/)/],
    depth: 3,
    name: "教育用計算機システム（ECCS）",
  },
  {
    patterns: [/^\/research_computing$/],
    depth: 3,
    name: "全学向け高速計算機・データ活用基盤",
  },
  {
    patterns: [/^\/research_computing\/mdx($|\/)/],
    depth: 4,
    name: "mdx",
  },
  {
    patterns: [/^\/research_computing\/utokyo_azure($|\/)/],
    depth: 4,
    name: "UTokyo Azure",
  },
  {
    patterns: [/^\/online($|\/)/, /^\/articles\//],
    depth: 2,
    name: "オンラインを活用するために",
  },
  {
    patterns: [/^\/good-practice($|\/)/],
    depth: 3,
    name: "グッドプラクティスの共有",
  },
  {
    patterns: [/^\/notice($|\/)/],
    depth: 2,
    name: "お知らせ",
  },
  {
    patterns: [/^\/events($|\/)/],
    negativePatterns: [/\/events\/luncheon($|\/)/],
    depth: 2,
    name: "イベント・説明会等",
  },
  {
    patterns: [/^\/events\/luncheon($|\/)/],
    depth: 3,
    name: "オンライン授業情報交換会",
  },
  {
    patterns: [/.*/],
    depth: 2,
    name: "その他",
  },
];

export const sitemapSectionsEn: SitemapSection[] = [
  {
    patterns: [/^\/en\/oc($|\/)/],
    depth: 2,
    name: "Online Classes (for students)",
  },
  {
    patterns: [/^\/en\/faculty_members($|\/)/],
    depth: 2,
    name: "Online Classes (for faculty members)",
  },
  {
    patterns: [/^\/en\/systems($|\/)/],
    depth: 2,
    name: "ICT systems",
  },
  {
    patterns: [/^\/en\/utokyo_account($|\/)/],
    depth: 3,
    name: "UTokyo Account",
  },
  {
    patterns: [/^\/en\/utas$/],
    depth: 3,
    name: "UTAS",
  },
  {
    patterns: [/^\/en\/utol($|\/)/],
    depth: 3,
    name: "UTOL",
  },
  {
    patterns: [/^\/en\/zoom($|\/)/],
    depth: 3,
    name: "Zoom",
  },
  {
    patterns: [/^\/en\/webex($|\/)/],
    depth: 3,
    name: "Webex",
  },
  {
    patterns: [/^\/en\/google($|\/)/],
    depth: 3,
    name: "ECCS Cloud Email",
  },
  {
    patterns: [/^\/en\/microsoft($|\/)/],
    depth: 3,
    name: "UTokyo Microsoft License",
  },
  {
    patterns: [/^\/en\/utokyo_wifi($|\/)/],
    depth: 3,
    name: "UTokyo Wi-Fi",
  },
  {
    patterns: [/^\/en\/slack($|\/)/],
    depth: 3,
    name: "UTokyo Slack",
  },
  {
    patterns: [/^\/en\/slido($|\/)/],
    depth: 3,
    name: "Slido",
  },
  {
    patterns: [/^\/en\/utokyo_vpn($|\/)/],
    depth: 3,
    name: "UTokyo VPN",
  },
  {
    patterns: [/^\/en\/eccs($|\/)/],
    depth: 3,
    name: "Educational Campus-Wide Computing System (ECCS) Terminals",
  },
  {
    patterns: [/^\/en\/research_computing$/],
    depth: 3,
    name: "High-performance computing and data utilization platform",
  },
  {
    patterns: [/^\/en\/research_computing\/utokyo_azure($|\/)/],
    depth: 4,
    name: "UTokyo Azure",
  },
  {
    patterns: [/^\/en\/online($|\/)/, /^\/articles\//],
    depth: 2,
    name: "Teaching Excellence",
  },
  {
    patterns: [/^\/en\/notice($|\/)/],
    depth: 2,
    name: "Notice",
  },
  {
    patterns: [/^\/en\/events($|\/)/],
    negativePatterns: [/\/events\/luncheon($|\/)/],
    depth: 2,
    name: "Orientations / Seminars",
  },
  {
    patterns: [/.*/],
    depth: 2,
    name: "Others",
  },
];
