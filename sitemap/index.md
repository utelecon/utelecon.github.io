---
title: サイトマップ
sitemap: false
---

{% assign pages = site.pages | sort: 'url' %}

## オンライン授業全般（学生向け）

<ul>
{% for page in pages %}
  {% unless page.url contains '/en/' or page.sitemap == false %}
    {% if page.url contains '/oc/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

## オンライン授業全般（教員向け）

<ul>
{% for page in pages %}
  {% unless page.url contains '/en/' or page.sitemap == false or page.url contains '/zoom/' %}
    {% if page.url contains '/faculty_members/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

## 東京大学のシステム

### UTAS

<ul>
{% for page in pages %}
  {% unless page.url contains '/en/' or page.sitemap == false %}
    {% if page.url contains '/utas' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

### ITC-LMS

<ul>
{% for page in pages %}
  {% unless page.url contains '/en/' or page.sitemap == false %}
    {% if page.url contains '/itc_lms' or page.url contains '/lms_lecturers/' or page.url contains '/lms_students/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

### Zoom

<ul>
{% for page in pages %}
  {% unless page.url contains '/en/' or page.sitemap == false %}
    {% if page.url contains '/zoom/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

### Webex

<ul>
{% for page in pages %}
  {% unless page.url contains '/en/' or page.sitemap == false %}
    {% if page.url contains '/webex/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

### ECCSクラウドメール (Google Workspace)

<ul>
{% for page in pages %}
  {% unless page.url contains '/en/' or page.sitemap == false %}
    {% if page.url contains '/eccs_cloud_email' or page.url contains '/meet/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

## オンラインを活用するために

<ul>
{% for page in pages %}
  {% unless page.url contains '/en/' or page.sitemap == false %}
    {% if page.url contains '/online/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
{% for page in pages %}
  {% unless page.url contains '/en/' or page.sitemap == false %}
    {% if page.url contains '/articles/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

### グッドプラクティス

<ul>
{% for page in pages %}
  {% unless page.url contains '/en/' or page.sitemap == false %}
    {% if page.url contains '/good-practice/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

## お知らせ

<ul>
{% for page in pages %}
  {% unless page.url contains '/en/' or page.sitemap == false %}
    {% if page.url contains '/notice/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

## イベント・説明会等

<ul>
{% for page in pages %}
  {% unless page.url contains '/en/' or page.sitemap == false or page.url contains '/events/luncheon/' %}
    {% if page.url contains '/events/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

### オンライン授業情報交換会

<ul>
{% for page in pages %}
  {% unless page.url contains '/en/' or page.sitemap == false %}
    {% if page.url contains '/events/luncheon/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endunless %}
{% endfor %}
</ul>

## その他

<ul>
{% for page in pages %}
  {% unless page.url contains '/en/' or page.sitemap == false %}
    {% unless page.url contains '/oc/' or page.url contains '/faculty_members/' or page.url contains '/online/' or page.url contains '/articles/' or page.url contains '/good-practice/' or page.url contains '/utas' or page.url contains '/itc_lms' or page.url contains '/lms_lecturers/' or page.url contains '/lms_students/' or page.url contains '/zoom/' or page.url contains '/webex/' or page.url contains '/eccs_cloud_email' or page.url contains '/meet/' or page.url contains '/notice/' or page.url contains '/events/' or page.url contains '/redirects.json' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endunless %}
  {% endunless %}
{% endfor %}
</ul>
