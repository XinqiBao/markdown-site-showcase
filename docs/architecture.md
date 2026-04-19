# Architecture

This repository keeps one canonical Markdown source tree in `content/` and
builds it into three sub-sites.

## Build Flow

1. Load shared metadata from `config/`
2. Sync canonical Markdown into each site-specific content root
3. Build a lightweight landing page at `/`
4. Build VitePress, Starlight, and Quartz into `dist/`
5. Publish `dist/` through one GitHub Pages workflow

## Why This Exists

The repository is optimized for low maintenance:

- one repository
- one Pages deployment
- one source of Markdown truth
- minimal customization beyond base paths and navigation
