interface SitemapSection {
    key: Symbol,
    patterns?: RegExp[],
    negativePatterns?: RegExp[],
    heading: string,
    name: Record<string, string>,
}

const sitemapSections: SitemapSection[] = [
    {
        key: Symbol("oc"),
        patterns: [/^\/oc($|\/)/],
        heading: "h2",
        name: {
            ja: "オンライン授業全般（学生向け）",
            en: "Online Classes (for students)",
        },
    },
    {
        key: Symbol("faculty_members"),
        patterns: [/^\/faculty_members($|\/)/],
        heading: "h2",
        name: {
            ja: "オンライン授業全般（教員向け）",
            en: "Online Classes (for faculty members)",
        },
    },
    {
        key: Symbol("systems"),
        patterns: [/^\/systems($|\/)/],
        heading: "h2",
        name: {
            ja: "東京大学のシステム",
            en: "ICT systems",
        }
    },
    {
        key: Symbol("utokyo_account"),
        patterns: [/^\/utokyo_account($|\/)/],
        heading: "h3",
        name: {
            ja: "UTokyo Account",
            en: "UTokyo Account",
        },
    },
    {
        key: Symbol("utas"),
        patterns: [/^\/utas$/],
        heading: "h3",
        name: {
            ja: "UTAS",
            en: "UTAS",
        },
    },
    {
        key: Symbol("itc_lms"),
        patterns: [/^\/itc_lms$/, /^\/lms_lecturers($|\/)/, /^\/lms_students($|\/)/],
        heading: "h3",
        name: {
            ja: "ITC-LMS",
            en: "ITC-LMS",
        },
    },
    {
        key: Symbol("zoom"),
        patterns: [/^\/zoom($|\/)/],
        heading: "h3",
        name: {
            ja: "Zoom",
            en: "Zoom",
        },
    },
    {
        key: Symbol("webex"),
        patterns: [/^\/webex($|\/)/],
        heading: "h3",
        name: {
            ja: "Webex",
            en: "Webex",
        },
    },
    {
        key: Symbol("eccs_cloud_email"),
        patterns: [/^\/eccs_cloud_email$/],
        heading: "h3",
        name: {
            ja: "ECCSクラウドメール (Google Workspace)",
            en: "ECCS Cloud Email",
        },
    },
    {
        key: Symbol("microsoft"),
        patterns: [/^\/microsoft($|\/)/],
        heading: "h3",
        name: {
            ja: "UTokyo Microsoft License",
            en: "UTokyo Microsoft License",
        },
    },
    {
        key: Symbol("utokyo_wifi"),
        patterns: [/^\/utokyo_wifi($|\/)/],
        heading: "h3",
        name: {
            ja: "UTokyo Wi-Fi",
            en: "UTokyo Wi-Fi",
        },
    },
    {
        key: Symbol("slack"),
        patterns: [/^\/slack($|\/)/],
        heading: "h3",
        name: {
            ja: "UTokyo Slack",
            en: "UTokyo Slack",
        },
    },
    {
        key: Symbol("slido"),
        patterns: [/^\/slido($|\/)/],
        heading: "h3",
        name: {
            ja: "Slido",
            en: "Slido",
        },
    },
    {
        key: Symbol("utokyo_vpn"),
        patterns: [/^\/utokyo_vpn($|\/)/],
        heading: "h3",
        name: {
            ja: "UTokyo VPN",
            en: "UTokyo VPN",
        },
    },
    {
        key: Symbol("online"),
        patterns: [/^\/online($|\/)/, /^\/articles\//],
        heading: "h2",
        name: {
            ja: "オンラインを活用するために",
            en: "Teaching Excellence",
        },
    },
    {
        key: Symbol("good-practice"),
        patterns: [/^\/good-practice($|\/)/],
        heading: "h3",
        name: {
            ja: "グッドプラクティスの共有",
            en: "Good Practice",
        },
    },
    {
        key: Symbol("notice"),
        patterns: [/^\/notice($|\/)/],
        heading: "h2",
        name: {
            ja: "お知らせ",
            en: "Notice",
        },
    },
    {
        key: Symbol("events"),
        patterns: [/^\/events($|\/)/],
        negativePatterns: [/\/events\/luncheon($|\/)/],
        heading: "h2",
        name: {
            ja: "イベント・説明会等",
            en: "Orientations / Seminars",
        },
    },
    {
        key: Symbol("luncheon"),
        patterns: [/^\/events\/luncheon($|\/)/],
        heading: "h3",
        name: {
            ja: "オンライン授業情報交換会",
            en: "Lunch time information exchange meeting",
        },
    },
    {
        key: Symbol("others"),
        patterns: [/.*/],
        heading: "h2",
        name: {
            ja: "その他",
            en: "Others",
        },
    }
]

export default sitemapSections;
