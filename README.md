# Markdown Site Showcase

[![Deploy GitHub Pages](https://github.com/XinqiBao/markdown-site-showcase/actions/workflows/deploy.yml/badge.svg)](https://github.com/XinqiBao/markdown-site-showcase/actions/workflows/deploy.yml)

One repository, one Markdown source tree, three static-site presentations.

## Live Site

- [Root landing page](https://xinqibao.github.io/markdown-site-showcase/)
- [VitePress demo](https://xinqibao.github.io/markdown-site-showcase/vitepress/)
- [Starlight demo](https://xinqibao.github.io/markdown-site-showcase/starlight/)
- [Quartz demo](https://xinqibao.github.io/markdown-site-showcase/quartz/)

## Why This Repo Exists

This repository is a maintenance-first example for comparing Markdown site
generators without maintaining separate content copies or separate GitHub Pages
repositories.

The goal is not to prove a permanent winner. The goal is to show what happens
when the same content source is rendered through three different default
browsing models.

## What It Publishes

- `/`: a lightweight landing page for comparison
- `/vitepress/`: a docs-first view
- `/starlight/`: a handbook-style view
- `/quartz/`: a knowledge-garden view

## Repository Guide

- `content/`: canonical Markdown source
- `config/`: shared repository and navigation metadata
- `scripts/`: sync and assembly scripts
- `sites/`: framework-specific apps
- `docs/`: public architecture, authoring, and decision notes
- `.context/`: local continuity files for active work

## Workflow

1. Edit content in `content/`.
2. Run `npm run verify`.
3. Review the assembled `dist/` output.
4. Push to `main` to publish through GitHub Pages.

## Key Commands

- `npm test`
- `npm run sync-content`
- `npm run build`
- `npm run verify`

## Further Reading

- [Docs Index](docs/README.md)
- [Architecture](docs/architecture.md)
- [Authoring](docs/authoring.md)
- [Decisions](docs/decisions.md)
