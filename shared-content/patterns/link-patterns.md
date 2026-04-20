---
title: Link Patterns
description: Linking conventions that stay stable across the three site generators.
---

# Link Patterns

The safest default is relative Markdown links:

- use `./page.md` inside the same section
- use `../section/page.md` across sections
- link to `index.md` for section hubs

## Why Relative Links Win

They keep the canonical source independent from the final deployment base path.
The generators can translate those links into their own public URL shape during
build time.

## Related Pages

- [Content Model](../concepts/content-model.md)
- [Sync Pipeline](../architecture/sync-pipeline.md)
- [Review Checklist](../workflows/review-checklist.md)
