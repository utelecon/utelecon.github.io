import type { Row } from "./type";

const rows: Row[] = [
  {
    name: "Getting Ready for Online Classes",
    contents: [
      <a href="/en/oc/">For Students</a>,
      <a href="/en/faculty_members/">For Staff</a>,
      <a href="/en/online/">Effective Use of Online Resources</a>,
      <a href="/en/support/">Support Desk</a>,
    ],
  },
  {
    name: "ICT Systems",
    contents: [
      <a href="/en/utokyo_account/">UTokyo Account</a>,
      <a href="/en/utas">UTAS</a>,
      <a href="/en/itc_lms">ITC-LMS</a>,
      <a href="/en/zoom/">Zoom</a>,
      <a href="/en/webex/">Webex</a>,
      <a href="/en/eccs_cloud_email">
        ECCS Cloud Email<small> (Google Workspace)</small>
      </a>,
      <a href="https://www.u-tokyo.ac.jp/adm/dics/ja/mslicense.html">
        UTokyo Microsoft License<small> (Microsoft 365)</small>
      </a>,
      <a href="/en/utokyo_wifi/">UTokyo WiFi</a>,
      <a href="https://www.ecc.u-tokyo.ac.jp/en/">ECCS Terminals</a>,
    ],
  },
  {
    name: "Teaching Excellence",
    contents: [
      <a href="/en/online/">Effective Use of Online Resources</a>,
      <a href="/en/online/tools">Search Online Resources by Tool</a>,
      <a href="/en/online/topics/">Search Online Resources by Purpose</a>,
      <a href="/en/events/2020-luncheon/">
        Community of Online Education Practices
      </a>,
    ],
  },
  {
    name: "Notice / Events",
    contents: [
      <a href="/en/notice/">Notice</a>,
      <a href="/en/events/2020-luncheon/">
        Community of Online Education Practices
      </a>,
      <a href="/en/events/">Orientations / Seminars</a>,
    ],
  },
  {
    name: "Support",
    contents: [
      <a href="/en/support/">Support Desk</a>,
      <a href="/en/faq/">FAQ</a>,
      <a href="/en/support/service-status">System Operation Status</a>,
      <a href="/en/oc/join">Trouble in Entering Classes</a>,
      <a href="/mobile/">Network Environment Support</a>,
      <a href="/supporters/class">Class Supporters</a>,
    ],
  },
];

export default rows;
