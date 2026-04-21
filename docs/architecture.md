# Architecture

This repository keeps one canonical shared Markdown tree in `shared-content/`
and builds it into multiple sub-sites under one GitHub Pages project site.

## Build Flow

1. Load shared metadata from `config/`
2. Sync canonical Markdown into each site workspace
3. Build each site from its synced local content tree
4. Build VitePress, Starlight, Docusaurus, Eleventy, and Quartz into framework
   output directories
5. Assemble those outputs under `dist/`
6. Build a lightweight landing page at `/`
7. Publish `dist/` through one GitHub Pages workflow

## Why This Exists

The repository is optimized for low maintenance:

- one repository
- one Pages deployment
- one source of Markdown truth
- minimal customization beyond base paths, navigation, and a narrow Quartz
  input override

## Site-Specific Notes

- `VitePress`: uses `sites/vitepress/docs/` as a generated content root
- `Starlight`: uses `sites/starlight/src/content/docs/` as a generated content root
- `Docusaurus`: uses `sites/docusaurus/docs/` as a generated content root
- `Eleventy`: uses `sites/eleventy/` as a generated input root while
  preserving local templates, data, and assets
- `Quartz`: uses `sites/quartz/content/` as a synced content root and disables
  gitignore filtering during local input discovery so ignored generated files
  still build correctly

## Output Layout

The final `dist/` tree contains:

- `dist/index.html`
- `dist/vitepress/`
- `dist/starlight/`
- `dist/docusaurus/`
- `dist/eleventy/`
- `dist/quartz/`
