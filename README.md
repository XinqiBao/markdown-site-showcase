# Markdown Site Showcase

Single-repository demo that publishes one canonical Markdown source into three
static-site presentations on one GitHub Pages site:

- `/vitepress/`
- `/starlight/`
- `/quartz/`

## Purpose

This repository is a maintenance-first example for comparing Markdown site
generators without maintaining separate content copies.

## Planned Structure

- `content/`: canonical Markdown source
- `config/`: shared repository and navigation metadata
- `scripts/`: sync and landing-page generation scripts
- `sites/`: VitePress, Starlight, and Quartz apps
- `docs/`: public architecture and authoring notes
- `.context/`: local continuity files for active work

## Key Commands

- `npm test`
- `npm run build`
- `npm run verify`
