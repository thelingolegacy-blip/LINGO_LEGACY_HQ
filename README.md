# LINGO_LEGACY_HQ — Master Repository

This repository is the aggregator and canonical skeleton for the Lingo Legacy ecosystem. It contains the master folder structure, templates, and starter assets for all child projects.

Top-level folders:
- 01_WEBSITES: landing pages and site skeletons
- 02_GAMES: game project folders and design bibles
- 03_MUSIC_DIVISION: artist folders and soundtracks
- 04_MEDIA: YouTube and media assets
- 05_ASSETS: visuals, sounds, animations, source files
- 06_CODE: engine folders and build notes
- 07_DOCS: master plan, game design bible template, blueprints
- 08_EXPORTS: exportable PDFs and conversion tools

How to use:
1. Clone this repo into your workspace.
2. Copy or submodule project-specific repos into the appropriate folders, or use this repo as the single source-of-truth.

Contact: dlingo@thelingolegacy (placeholder)

## Studio-ready deployment checklist

- Production homepage has canonical, Open Graph, Twitter card, and description metadata.
- Vercel Web Analytics and Speed Insights scripts are present for dashboard telemetry.
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, and `404.html` are included for launch readiness.
- `vercel.json` sets baseline security headers without exposing secrets in source.
