Visit **[cdfm-iitd.github.io](https://cdfm-iitd.github.io)** 🚀

# CDFM Lab Website

Website of the **Computational Design of Functional Materials (CDFM)** group at IIT Delhi, led by Prof. Dibyajyoti Ghosh.
Migrated from [the Google Site](https://sites.google.com/view/dibyajyoti-ghosh/home) and built on Greene Lab's [Lab Website Template](https://github.com/greenelab/lab-website-template) ([docs](https://greene-lab.gitbook.io/lab-website-template-docs)).

## Where things live

| What | Where |
|---|---|
| Site title, description, social links | `_config.yaml` |
| Home page | `index.md` |
| Research areas, methods, collaborators | `research/index.md` |
| Publications list (input) | `_data/sources.yaml` |
| Publications list (generated, do not edit) | `_data/citations.yaml` |
| Team members (one file per person) | `_members/*.md`, photos in `images/team/` |
| Team page | `team/index.md` |
| Gallery (group photos) | `gallery/index.md`, photos in `images/gallery/` |
| AI4Mat demo (linked at the end of the home page) | `ai4mat/index.md`, `_ai4mat/*.html`, data in `assets/ai4mat/` |
| Home page header background | `images/header.svg` |
| Teaching, Resources, Join Us, Contact | `teaching/`, `resources/`, `join/`, `contact/` |
| Colors and fonts | `_styles/-theme.scss` |

## Common tasks

**Add a publication** — add an entry at the top of `_data/sources.yaml`:

```yaml
- id: doi:10.1021/acs.chemmater.6c01097
  type: paper
```

On push to GitHub, the "update citations" workflow fills in the title, authors, journal, and date automatically.
To regenerate locally:

```bash
python -m venv .venv && .venv/bin/pip install -r _cite/requirements.txt
PATH=".venv/bin:$PATH" .venv/bin/python _cite/cite.py
```

**Add a team member** — create `_members/first-last.md`:

```yaml
---
name: First Last
image: images/team/first-last.jpg
role: phd            # principal-investigator | postdoc | phd | masters | alumni-phd | alumni
description: ...     # optional, overrides the role label (e.g. "M.Tech. Project (2025–26)")
affiliation: ...     # optional, e.g. current position for alumni
order: 11            # phd only: position on the Team page
joined: 2026         # phd only: shown as "2026 – Present"
links:
  email: someone@iitd.ac.in
---

Short bio.
```

When someone graduates, change their `role` to `alumni` or `alumni-phd`.

## Run locally

Requires Ruby 3.1 or 3.2 (Jekyll 4.3 does not run on Ruby ≥ 3.3), e.g. `brew install ruby@3.2`.

```bash
export PATH="/opt/homebrew/opt/ruby@3.2/bin:$PATH"
BUNDLE_PATH=vendor/bundle bundle install
BUNDLE_PATH=vendor/bundle bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>.
