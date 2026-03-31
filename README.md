# CDFM @ IIT Delhi — Data & Supplementary Materials

[![Jekyll](https://img.shields.io/badge/jekyll-%3E%3D%203.7-blue.svg)](https://jekyllrb.com/)
[![Minimal Mistakes](https://img.shields.io/badge/theme-Minimal%20Mistakes-blue.svg)](https://github.com/mmistakes/minimal-mistakes)
[![LICENSE](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

This repository hosts **supplementary data, simulation outputs, input files, and supporting materials** for publications from the [Computational Design of Functional Materials (CDFM)](https://sites.google.com/view/dibyajyoti-ghosh/home) group at IIT Delhi.

**Live site:** [https://cdfm-iitd.github.io](https://cdfm-iitd.github.io)

---

## Projects

| Project | Description |
|---|---|
| [AI4Mat Demo](/ai4mat/) | AI-driven materials discovery — crystal structures, DOS, band structure, and AIMD trajectories |

---

## Repository Structure

```
_ai4mat/          # Collection: one file per structure in AI4Mat Demo
_pages/           # Site pages (index, AI4Mat listing, etc.)
_includes/        # Custom Jekyll includes (masthead, etc.)
_data/            # Navigation and other data files
assets/           # Images and static assets
_config.yml       # Jekyll site configuration
```

## Adding a New Structure (AI4Mat)

1. Copy `_ai4mat/template.md` and rename it (e.g. `perovskite-abx3.md`)
2. Set `published: true` and fill in the front matter fields
3. Add plot files under `assets/ai4mat/<structure-name>/`
4. Commit and push — the structure will appear automatically on the listing page

## Contact

For questions about the data or methods, contact [dibyajyoti@iitd.ac.in](mailto:dibyajyoti@iitd.ac.in).

Built on [Jekyll](https://jekyllrb.com) & [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes).
