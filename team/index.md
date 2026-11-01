---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

The CDFM group brings together chemists, physicists, and materials scientists working on computational materials design at IIT Delhi.

{% include section.html %}

## Principal Investigator

{% assign pi = site.members | where: "slug", "dibyajyoti-ghosh" | first %}

{% capture floatcontent %}

{% include portrait.html lookup="dibyajyoti-ghosh" %}

<div>
  {% for link in pi.links %}
    {% assign key = link[0] %}
    {% assign value = link[1] %}
    {% include button.html type=key link=value style="bare" %}<br>
  {% endfor %}
</div>

{% endcapture %}

{% include float.html content=floatcontent %}

{{ pi.content | markdownify }}

{% include float.html clear=true %}

{% include section.html %}

## Postdoctoral Researchers

{% include list.html data="members" component="portrait" filter="role == 'postdoc'" %}

## Ph.D. Students

{% assign phds = site.members | where: "role", "phd" | sort: "order" %}
{% for member in phds %}
  {% include portrait.html lookup=member.slug %}
{% endfor %}

## Project Students and Research Fellows

{% include list.html data="members" component="portrait" filter="role == 'masters'" %}

{% include section.html %}

{%
  include button.html
  link="gallery"
  text="Group Photos"
  icon="fa-solid fa-camera"
%}
{%
  include button.html
  link="join"
  text="Join the group"
  icon="fa-solid fa-user-plus"
%}
{:.center}

{% include section.html %}

## Alumni

<details>
<summary><strong>Ph.D. Alumni</strong></summary>
{% include list.html data="members" component="portrait" filter="role == 'alumni-phd'" style="small" %}
</details>

<details>
<summary><strong>Project Student Alumni</strong></summary>
{% include list.html data="members" component="portrait" filter="role == 'alumni'" style="small" %}
</details>
