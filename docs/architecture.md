# Architecture

This repository keeps one canonical Markdown source tree in `content/` and
builds it into three sub-sites under one GitHub Pages project site.

## Build Flow

1. Load shared metadata from `config/`
2. Sync canonical Markdown into the framework roots that require generated docs
3. Build Quartz directly from the canonical `content/` tree
3. Build a lightweight landing page at `/`
4. Build VitePress, Starlight, and Quartz into `dist/`
5. Publish `dist/` through one GitHub Pages workflow

## Why This Exists

The repository is optimized for low maintenance:

- one repository
- one Pages deployment
- one source of Markdown truth
- minimal customization beyond base paths and navigation

## Site-Specific Notes

- `VitePress`: uses `sites/vitepress/docs/` as a generated content root
- `Starlight`: uses `sites/starlight/src/content/docs/` as a generated content root
- `Quartz`: builds from `../../content` to avoid gitignore interference with generated directories
