import type { Row } from "./type";

const rows: Row[] = [
  {
    name: "まずはここから",
    contents: [
      <a href="/oc/">
        大学生活に必要な情報システムの準備について<small>（学生向け）</small>
      </a>,
      <a href="/faculty_members/">
        東京大学における情報システムの準備について<small>（教員向け）</small>
      </a>,
      <a href="/online/">オンラインを活用するために</a>,
      <a href="/support/">サポート窓口</a>,
    ],
  },
  {
    name: "東京大学のシステム",
    contents: [
      <a href="/utokyo_account/">UTokyo Account</a>,
      <a href="/utas">UTAS</a>,
      <a href="/itc_lms">ITC-LMS</a>,
      <a href="/zoom/">Zoom</a>,
      <a href="/webex/">Webex</a>,
      <a href="/eccs_cloud_email">
        ECCSクラウドメール<small> (Google Workspace)</small>
      </a>,
      <a href="https://www.u-tokyo.ac.jp/adm/dics/ja/mslicense.html">
        UTokyo Microsoft License<small> (Microsoft 365)</small>
      </a>,
      <a href="/utokyo_wifi/">UTokyo WiFi</a>,
      <a href="https://www.ecc.u-tokyo.ac.jp/">ECCS端末</a>,
      <a href="/systems#others">その他</a>,
    ],
  },
  {
    name: "オンラインの活用",
    contents: [
      <a href="/online/">オンラインを活用するために</a>,
      <a href="/online/tools">使えるツールから探す</a>,
      <a href="/online/topics/">やりたいことから探す</a>,
      <a href="/online/courses">よりよい授業の実施方法を探す</a>,
      <a href="/online/#utokyo">東大の実践を知る</a>,
    ],
  },
  {
    name: "お知らせ・イベント",
    contents: [
      <a href="/notice/">お知らせ</a>,
      <a href="/events/luncheon/">オンライン授業情報交換会</a>,
      <a href="/events/">説明会等</a>,
    ],
  },
  {
    name: "サポート",
    contents: [
      <a href="/support/">サポート窓口</a>,
      <a href="/faq/">よくある質問 (FAQ)</a>,
      <a href="/support/service-status">システム運用状況（障害情報等）</a>,
      <a href="/oc/join">授業入室トラブル</a>,
      <a href="/mobile/">ネットワーク環境支援</a>,
      <a href="/supporters/class">クラスサポーター</a>,
    ],
  },
];

export default rows;
