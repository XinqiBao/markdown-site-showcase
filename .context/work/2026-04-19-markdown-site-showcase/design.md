# Markdown Site Showcase

Status: approved-design
Date: 2026-04-19

## Summary

This repository publishes one GitHub Pages project site with four entrypoints:

- `/` for the landing page
- `/vitepress/` for the VitePress view
- `/starlight/` for the Starlight view
- `/quartz/` for the Quartz view

The content source of truth is `content/`. The repository uses the smallest
custom layer needed to keep one Markdown source and still let each framework run
close to its default model.

## Key Decisions

- one repository instead of three
- one Pages deployment artifact instead of three repos
- shared metadata for navigation and base paths
- generated content copies only where the framework benefits from them
- public docs in `README.md` and `docs/`, active continuity in `.context/`
