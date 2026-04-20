---
title: Tooling Notes
description: The practical role of each framework and script inside this repository.
---

# Tooling Notes

The repository uses:

- VitePress for a classic docs-first view
- Starlight for a more polished handbook-style view
- Quartz for graph and backlink-oriented browsing
- a small Node layer for sync, landing-page generation, and build assembly

## Operational Boundary

The custom scripts should stay boring. If a generator can do something with its
defaults, prefer that over adding custom plumbing.

## Related Pages

- [Sync Pipeline](../architecture/sync-pipeline.md)
- [Authoring Flow](../workflows/authoring-flow.md)
- [Deployment Paths](../topics/deployment-paths.md)
