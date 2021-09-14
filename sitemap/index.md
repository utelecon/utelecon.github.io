---
title: サイトマップ
sitemap: false
---

{% assign pages = site.pages | sort: 'url' %}

## オンライン授業全般（学生向け）

<ul>
{% for p in pages %}
  {% unless p.url contains '/en/' or p.sitemap == false %}
    {% if p.url contains '/oc/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

## オンライン授業全般（教員向け）

<ul>
{% for p in pages %}
  {% unless p.url contains '/en/' or p.sitemap == false or p.url contains '/zoom/' %}
    {% if p.url contains '/faculty_members/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

## 東京大学のシステム

### UTAS

<ul>
{% for p in pages %}
  {% unless p.url contains '/en/' or p.sitemap == false %}
    {% if p.url contains '/utas' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

### ITC-LMS

<ul>
{% for p in pages %}
  {% unless p.url contains '/en/' or p.sitemap == false %}
    {% if p.url contains '/itc_lms' or p.url contains '/lms_lecturers/' or p.url contains '/lms_students/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

### Zoom

<ul>
{% for p in pages %}
  {% unless p.url contains '/en/' or p.sitemap == false %}
    {% if p.url contains '/zoom/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

### Webex

<ul>
{% for p in pages %}
  {% unless p.url contains '/en/' or p.sitemap == false %}
    {% if p.url contains '/webex/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

### ECCSクラウドメール (Google Workspace)

<ul>
{% for p in pages %}
  {% unless p.url contains '/en/' or p.sitemap == false %}
    {% if p.url contains '/eccs_cloud_email' or p.url contains '/meet/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

### その他

<ul>
{% for p in pages %}
  {% unless p.url contains '/en/' or p.sitemap == false %}
    {% if p.url contains '/slido/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

## オンラインを活用するために

<ul>
{% for p in pages %}
  {% unless p.url contains '/en/' or p.sitemap == false %}
    {% if p.url contains '/online/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
{% for p in pages %}
  {% unless p.url contains '/en/' or p.sitemap == false %}
    {% if p.url contains '/articles/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

### グッドプラクティス

<ul>
{% for p in pages %}
  {% unless p.url contains '/en/' or p.sitemap == false %}
    {% if p.url contains '/good-practice/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

## お知らせ

<ul>
{% for p in pages %}
  {% unless p.url contains '/en/' or p.sitemap == false %}
    {% if p.url contains '/notice/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

## イベント・説明会等

<ul>
{% for p in pages %}
  {% unless p.url contains '/en/' or p.sitemap == false or p.url contains '/events/luncheon/' %}
    {% if p.url contains '/events/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

### オンライン授業情報交換会

<ul>
{% for p in pages %}
  {% unless p.url contains '/en/' or p.sitemap == false %}
    {% if p.url contains '/events/luncheon/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

## その他

<ul>
{% for p in pages %}
  {% unless p.url contains '/en/' or p.sitemap == false %}
    {% unless p.url contains '/oc/' or p.url contains '/faculty_members/' or p.url contains '/online/' or p.url contains '/articles/' or p.url contains '/good-practice/' or p.url contains '/utas' or p.url contains '/itc_lms' or p.url contains '/lms_lecturers/' or p.url contains '/lms_students/' or p.url contains '/zoom/' or p.url contains '/webex/' or p.url contains '/eccs_cloud_email' or p.url contains '/meet/' or p.url contains '/slido/' or p.url contains '/notice/' or p.url contains '/events/' or p.url contains '/redirects.json' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endunless %}
  {% endunless %}
{% endfor %}
</ul>
