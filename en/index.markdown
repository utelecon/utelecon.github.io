---
title: Online Class/ Web Conference Portal Site<br>@ the University of Tokyo
layout: en
---

<header class="header">
  <div class="header__hamburger-button">
    <button class="hiraku-open-btn" id="offcanvas-btn-left" data-toggle-offcanvas="#js-hiraku-offcanvas-1">
    <span class="hiraku-open-btn-line"></span>
    </button>
    <div style="line-height: 10px;font-size: 12px;color: white;">Menu</div>
  </div>
  <h1 class="top-h1">
    <a class="header__title" href="/{% if page.lang == "en" %}en/{% endif %}">
      <span class="header__title__main">utelecon</span>
      <span class="header__title__sub">Online Class/ Web Conference Portal Site @ the University of Tokyo</span>
    </a>
  </h1>
  <div class="header__hamburger-contents">
    <div class="header__links">
      <div class="gcse-search"></div>
      <div>
          <a href="/{% if page.lang == "en" %}en/{% endif %}">TOP</a> | <a href="/{{page.url}}">English</a>
      </div>
    </div>
    <nav class="header__nav">
      <ul>
        {% for item in site.data.nav %}
          <li>
            <div class="header_nav_text">{{ item.name }}</div>
            <ul>
              {% for second in item.contents %}
                <li><a href="{{ second.url }}"{%
                  assign url_slice = second.url | slice: 0, 4
                %}{%
                  if url_slice == "http"
                %} target="_blank" rel="noopener"{%
                  endif
                %}>{{ second.name }}</a></li>
              {% endfor %}
            </ul>
          </li>
        {% endfor %}
      </ul>
    </nav>
  </div>
  <script>
    $(".header__hamburger-contents").hiraku({
      btn:"#offcanvas-btn-left",
      direction:"left"
    });
  </script>
</header>

<main id="content">

{% include sso.html %}

  <h2>Getting Ready for Online Classes</h2>
  <div class="top__cards">
    <a href="/oc/">For Students</a>
    <a href="/faculty_members/">For Staff</a>
    <a href="/improvement/">Improving Online Classes</a>
    <a href="/supports/">Support Desk</a>
    <a href="/change2021s/">System Change for Spring 2021</a>
  </div>

  <h2>Pickup</h2>
  <div class="top__cards">
    <a href="/events/2021-03-17">2021/03/17 Orientations: For Online Classes in 2021 (Japanese Only)</a>
    <a href="/events/2021-03-25">2021/03/25 Seminars: How to use Zoom in online classes (Japanese Only)
</a>
  </div>

  <h2>Notice</h2>
  <ul>
    <li><span style="color:blue;">2021/1/26:</span> <a href="https://utelecon.adm.u-tokyo.ac.jp/notice/20210126-domain-change">The domain name of this site has been changed to https://utelecon.adm.u-tokyo.ac.jp/.</a> Existing links (i.e. https://utelecon.github.io/en/ ) and bookmarks will continue to work via the old URL.</li>
  </ul>

  <h2>ICT Systems</h2>
  <div class="top__systems">
    <ul>
      <li><a href="https://www.u-tokyo.ac.jp/adm/dics/ja/account.html" target="_blank" rel="noopener">UTokyo Account</a></li>
      <li><a href="/utas">UTAS</a></li>
      <li><a href="/itc_lms">ITC-LMS</a></li>
      <li><a href="/zoom/">Zoom</a></li>
      <li><a href="/webex/">Webex</a></li>
      <li><a href="/eccs_cloud_email">ECCS Cloud Email<small> (Google Workspace)</small></a></li>
      <li><a href="https://www.u-tokyo.ac.jp/adm/dics/ja/mslicense.html" target="_blank" rel="noopener">UTokyo Microsoft License<small> (Microsoft 365)</small></a></li>
      <li><a href="https://www.u-tokyo.ac.jp/adm/dics/ja/wifi.html" target="_blank" rel="noopener">UTokyo WiFi</a></li>
      <li><a href="https://www.ecc.u-tokyo.ac.jp/" target="_blank" rel="noopener">ECCS Terminals</a></li>
    </ul>
  </div>
</main>

{% include layouts/footer.html %}