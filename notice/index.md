---
title: お知らせ
---

{% comment %} お知らせの追加は `_data/notice/ja.yml` を編集してください {% endcomment %}

<ul>
  {% for item in site.data.notice %}
    <li>
      <span class="notice-date">{{ item.date }}</span>
      {{ item.content.ja | markdownify | replace: '<p>', '' | replace: '</p>', '' }}
    </li>
  {% endfor %}
</ul>
