---
title: Notice
lang: en
---

<ul>
  {% for item in site.data.notice.en %}
    <li>
      <span class="notice-date">{{ item.date }}</span>
      {{ item.content | markdownify | replace: '<p>', '' | replace: '</p>', '' }}
    </li>
  {% endfor %}
</ul>
