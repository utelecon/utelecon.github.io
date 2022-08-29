---
title: Notice
---

{% comment %} To add notice here, edit `_data/notice/en.yml` {% endcomment %}

<ul>
  {% for item in site.data.notice %}
    <li>
      <span class="notice-date">{{ item.date }}</span>
      {{ item.content.en | default: item.content.ja | markdownify | replace: '<p>', '' | replace: '</p>', '' }}
    </li>
  {% endfor %}
</ul>
