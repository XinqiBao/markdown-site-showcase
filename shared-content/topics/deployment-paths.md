---
title: Deployment Paths
description: Why one repository and one Pages site can still expose multiple demos.
---

# Deployment Paths

GitHub Pages gives a project repository one site. This repository uses that one
site as a container for multiple static outputs:

- `/` for the lightweight landing page
- `/vitepress/` for the docs-first view
- `/starlight/` for the handbook view
- `/quartz/` for the garden view

## Why This Is Better Here

It keeps deployment simple, keeps the comparison together, and avoids pushing
the same content to multiple repositories.

## Related Pages

- [Sync Pipeline](../architecture/sync-pipeline.md)
- [Tooling Notes](../reference/tooling-notes.md)
- [Review Checklist](../workflows/review-checklist.md)
