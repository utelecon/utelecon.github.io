---
title: お知らせ
redirect_from:
  - /whats_not_new
---

{% comment %} お知らせの追加は `_data/notice/ja.yml` を編集してください {% endcomment %}

<ul>
  {% for item in site.data.notice %}
    <li>
      <span class="notice-date">{{ item.date }}</span>
      {{ item.content.ja | default: item.content.en | markdownify | replace: '<p>', '' | replace: '</p>', '' }}
    </li>
  {% endfor %}
</ul>
