---
title: Notice
---

{% comment %} To add notice here, edit `_data/notice/en.yml` {% endcomment %}

<ul>
  {% for item in site.data.notice.en %}
    <li>
      <span class="notice-date">{{ item.date }}</span>
      {{ item.content | markdownify | replace: '<p>', '' | replace: '</p>', '' }}
    </li>
  {% endfor %}
</ul>
