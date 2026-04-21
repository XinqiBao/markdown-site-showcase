# Status

Status: complete
Date: 2026-04-21

## Current State

- canonical Markdown root is `shared-content/`
- all current site demos consume synced local copies
- public routes:
  - [Root landing page](https://xinqibao.github.io/markdown-site-showcase/)
  - [VitePress demo](https://xinqibao.github.io/markdown-site-showcase/vitepress/)
  - [Starlight demo](https://xinqibao.github.io/markdown-site-showcase/starlight/)
  - [Quartz demo](https://xinqibao.github.io/markdown-site-showcase/quartz/)
  - [Docusaurus demo](https://xinqibao.github.io/markdown-site-showcase/docusaurus/)
  - [Eleventy demo](https://xinqibao.github.io/markdown-site-showcase/eleventy/)
- latest local `npm run verify` passes
- latest GitHub Pages workflow succeeded on run `24727744485`
- `main` is aligned with `origin/main`
- remaining note: GitHub Actions still shows a Node 20 deprecation annotation from
  the Pages artifact action chain; deployment succeeds, but the workflow should be
  revisited before the 2026 runner cutoff

## Next Exact Task

If a future session continues from here, the next highest-value task is public
comparison polish: add a concise comparison matrix or review guide that helps a
reader interpret the five site models side by side.
