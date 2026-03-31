---
layout: splash
title: "AI4Mat Demo"
permalink: /ai4mat/
header:
  overlay_image: "/assets/images/AI4Mat_BG.jpg"
  overlay_filter: 0.5
  caption: "AI-driven Materials Discovery &nbsp;·&nbsp; CDFM @ IIT Delhi"
  actions:
    - label: "Main Lab Site"
      url: "https://sites.google.com/view/dibyajyoti-ghosh/home"
excerpt: "Crystal structures, electronic properties, and molecular dynamics trajectories from AI-driven materials discovery."
---

**AI4Mat** is a project from the CDFM group at IIT Delhi focused on AI-driven discovery of functional materials. This demo showcases a curated set of predicted structures along with their computed properties: density of states (DOS), electronic band structure, and ab initio molecular dynamics (AIMD) trajectories.

Each entry below is an individual material predicted or screened by the AI4Mat workflow. Click a structure to explore its properties interactively.

---

## Structures

{% assign structures = site.ai4mat %}
{% if structures.size > 0 %}
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1rem;">
{% for s in structures %}
  <div style="border: 1px solid #e0e0e0; border-radius: 6px; padding: 1.2rem; background: #fafafa;">
    <h3 style="margin-top: 0;"><a href="{{ s.url | relative_url }}">{{ s.title }}</a></h3>
    {% if s.formula %}<p style="margin: 0.2rem 0; font-family: monospace; font-size: 0.95em; color: #555;">{{ s.formula }}</p>{% endif %}
    {% if s.excerpt %}<p style="margin: 0.5rem 0 0.8rem; font-size: 0.9em;">{{ s.excerpt }}</p>{% endif %}
    <div style="font-size: 0.82em; color: #666;">
      {% if s.has_dos %}<span style="margin-right: 0.6rem;">&#10003; DOS</span>{% endif %}
      {% if s.has_band %}<span style="margin-right: 0.6rem;">&#10003; Band</span>{% endif %}
      {% if s.has_aimd %}<span>&#10003; AIMD</span>{% endif %}
    </div>
    <a href="{{ s.url | relative_url }}" style="display: inline-block; margin-top: 0.8rem; font-size: 0.85em;">View details &rarr;</a>
  </div>
{% endfor %}
</div>

{% else %}
<div class="notice--warning" role="note">
  <strong>Coming soon:</strong> Structure pages are being prepared and will appear here shortly.
</div>
{% endif %}

---

## About the Data

Each structure page provides:

| Section | Contents |
|---|---|
| **Crystal Structure** | 3D interactive viewer, lattice parameters, space group |
| **Density of States** | Total and projected DOS plots |
| **Band Structure** | Electronic band structure along high-symmetry paths |
| **AIMD Trajectory** | Animated trajectory, energy/temperature evolution |

Data is computed using DFT as implemented in VASP. For methodology details, refer to the associated publication.
