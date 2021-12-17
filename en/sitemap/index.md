---
title: Sitemap
sitemap: false
---

{% assign pages = site.pages | sort: 'url' %}

## Online Classes (for students)

<ul>
{% for p in pages %}
  {% if p.url contains '/en/' and p.sitemap != false %}
    {% if p.url contains '/oc/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

## Online Classes (for faculty members)

<ul>
{% for p in pages %}
  {% if p.url contains '/en/' and p.sitemap != false %}
    {% if p.url contains '/faculty_members/' %}
      {% unless p.url contains '/zoom/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
      {% endunless %}
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

## ICT Systems

### UTAS

<ul>
{% for p in pages %}
  {% if p.url contains '/en/' and p.sitemap != false %}
    {% if p.url contains '/utas' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

### ITC-LMS

<ul>
{% for p in pages %}
  {% if p.url contains '/en/' and p.sitemap != false %}
    {% if p.url contains '/itc_lms' or p.url contains '/lms_lecturers/' or p.url contains '/lms_students/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

### Zoom

<ul>
{% for p in pages %}
  {% if p.url contains '/en/' and p.sitemap != false %}
    {% if p.url contains '/zoom/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

### Webex

<ul>
{% for p in pages %}
  {% if p.url contains '/en/' and p.sitemap != false %}
    {% if p.url contains '/webex/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

### ECCS Cloud Email (Google Workspace)

<ul>
{% for p in pages %}
  {% if p.url contains '/en/' and p.sitemap != false %}
    {% if p.url contains '/eccs_cloud_email' or p.url contains '/meet/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

## Notice

<ul>
{% for p in pages %}
  {% if p.url contains '/en/' and p.sitemap != false %}
    {% if p.url contains '/notice/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

<!--

## オンラインを活用するために

<ul>
{% for p in pages %}
  {% if p.url contains '/en/' and p.sitemap != false %}
    {% if p.url contains '/online/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
{% for p in pages %}
  {% if p.url contains '/en/' and p.sitemap != false %}
    {% if p.url contains '/articles/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

### グッドプラクティス

<ul>
{% for p in pages %}
  {% if p.url contains '/en/' and p.sitemap != false %}
    {% if p.url contains '/good-practice/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

-->

## Events

<ul>
{% for p in pages %}
  {% if p.url contains '/en/' and p.sitemap != false %}
    {% if p.url contains '/events/' %}
      {% unless p.url contains '/events/luncheon/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
      {% endunless %}
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

<!--

### オンライン授業情報交換会

<ul>
{% for p in pages %}
  {% if p.url contains '/en/' and p.sitemap != false %}
    {% if p.url contains '/events/luncheon/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

-->

## Others

<ul>
{% for p in pages %}
  {% if p.url contains '/en/' and p.sitemap != false %}
    {% unless p.url contains '/oc/' or p.url contains '/faculty_members/' or p.url contains '/online/' or p.url contains '/articles/' or p.url contains '/good-practice/' or p.url contains '/utas' or p.url contains '/itc_lms' or p.url contains '/lms_lecturers/' or p.url contains '/lms_students/' or p.url contains '/zoom/' or p.url contains '/webex/' or p.url contains '/eccs_cloud_email' or p.url contains '/meet/' or p.url contains '/notice/' or p.url contains '/events/' %}
      <li><a href="{{ p.url | replace: '.html', '' }}">{{ p.title }}</a></li>
    {% endunless %}
  {% endif %}
{% endfor %}
</ul>
