---
title: Sitemap
lang: en
sitemap: false
---

{% assign pages = site.pages | sort: 'url' %}

## Online Classes (for students)

<ul>
{% for page in pages %}
  {% if page.url contains '/en/' and page.sitemap != false %}
    {% if page.url contains '/oc/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

## Online Classes (for faculty members)

<ul>
{% for page in pages %}
  {% if page.url contains '/en/' and page.sitemap != false %}
    {% if page.url contains '/faculty_members/' %}
      {% unless page.url contains '/zoom/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
      {% endunless %}
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

## ICT Systems

### UTAS

<ul>
{% for page in pages %}
  {% if page.url contains '/en/' and page.sitemap != false %}
    {% if page.url contains '/utas' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

### ITC-LMS

<ul>
{% for page in pages %}
  {% if page.url contains '/en/' and page.sitemap != false %}
    {% if page.url contains '/itc_lms' or page.url contains '/lms_lecturers/' or page.url contains '/lms_students/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

### Zoom

<ul>
{% for page in pages %}
  {% if page.url contains '/en/' and page.sitemap != false %}
    {% if page.url contains '/zoom/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

### Webex

<ul>
{% for page in pages %}
  {% if page.url contains '/en/' and page.sitemap != false %}
    {% if page.url contains '/webex/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

### ECCS Cloud Email (Google Workspace)

<ul>
{% for page in pages %}
  {% if page.url contains '/en/' and page.sitemap != false %}
    {% if page.url contains '/eccs_cloud_email' or page.url contains '/meet/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

## Notice

<ul>
{% for page in pages %}
  {% if page.url contains '/en/' and page.sitemap != false %}
    {% if page.url contains '/notice/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

<!--

## オンラインを活用するために

<ul>
{% for page in pages %}
  {% if page.url contains '/en/' and page.sitemap != false %}
    {% if page.url contains '/online/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
{% for page in pages %}
  {% if page.url contains '/en/' and page.sitemap != false %}
    {% if page.url contains '/articles/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

### グッドプラクティス

<ul>
{% for page in pages %}
  {% if page.url contains '/en/' and page.sitemap != false %}
    {% if page.url contains '/good-practice/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

-->

## Events

<ul>
{% for page in pages %}
  {% if page.url contains '/en/' and page.sitemap != false %}
    {% if page.url contains '/events/' %}
      {% unless page.url contains '/events/luncheon/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
      {% endunless %}
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

<!--

### オンライン授業情報交換会

<ul>
{% for page in pages %}
  {% if page.url contains '/en/' and page.sitemap != false %}
    {% if page.url contains '/events/luncheon/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

-->

## Others

<ul>
{% for page in pages %}
  {% if page.url contains '/en/' and page.sitemap != false %}
    {% unless page.url contains '/oc/' or page.url contains '/faculty_members/' or page.url contains '/online/' or page.url contains '/articles/' or page.url contains '/good-practice/' or page.url contains '/utas' or page.url contains '/itc_lms' or page.url contains '/lms_lecturers/' or page.url contains '/lms_students/' or page.url contains '/zoom/' or page.url contains '/webex/' or page.url contains '/eccs_cloud_email' or page.url contains '/meet/' or page.url contains '/notice/' or page.url contains '/events/' %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title }}</a></li>
    {% endunless %}
  {% endif %}
{% endfor %}
</ul>

## sitemap: false

<ul>
{% for page in pages %}
  {% if page.url contains '/en/' and page.sitemap == false %}
    {% unless page.redirect_to %}
      <li><a href="{{ page.url | replace: '.html', '' }}">{{ page.title | default: page.url }}</a></li>
    {% endunless %}
  {% endif %}
{% endfor %}
</ul>
