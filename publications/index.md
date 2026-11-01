---
title: Publications
nav:
  order: 2
  tooltip: Published works
---

# {% include icon.html icon="fa-solid fa-scroll" %}Publications

For the most up-to-date list and citation metrics, see Prof. Ghosh's profiles:

{%
  include button.html
  type="google-scholar"
  link="WnMZsO4AAAAJ"
%}
{%
  include button.html
  type="orcid"
  link="0000-0002-3640-7537"
%}

{% include section.html %}

## Journal Covers

{% capture content %}

{% include figure.html image="images/covers/cover-02.jpg" caption="2022" %}
{% include figure.html image="images/covers/cover-03.jpg" caption="2021" %}
{% include figure.html image="images/covers/cover-04.jpg" caption="2021" %}
{% include figure.html image="images/covers/cover-05.jpg" caption="2018" %}

{% endcapture %}

{% include grid.html content=content %}

{% include section.html %}

## All Publications

{% include search-box.html %}

{% include search-info.html %}

{% comment %}
  numbered like the old site: oldest paper is 1, newest has the highest number
{% endcomment %}
{% assign citations = site.data.citations | sort: "date" | reverse %}
{% assign number = citations.size %}
{% assign years = citations | group_by_exp: "c", "c.date | date: '%Y'" %}

{% for year in years %}
  <h3 id="{{ year.name }}">{{ year.name }}</h3>
  {% for citation in year.items %}
    {%
      include citation.html
      number=number
      id=citation.id
      title=citation.title
      authors=citation.authors
      publisher=citation.publisher
      date=citation.date
      link=citation.link
      type=citation.type
    %}
    {% assign number = number | minus: 1 %}
  {% endfor %}
{% endfor %}
