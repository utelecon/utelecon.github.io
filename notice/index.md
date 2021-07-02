---
title: お知らせ
---

<ul>
  {% for item in site.data.notice.ja %}
    <li>
      <span class="notice-date">{{ item.date }}</span>
      {{ item.content | markdownify | replace: '<p>', '' | replace: '</p>', '' }}
    </li>
  {% endfor %}
</ul>
