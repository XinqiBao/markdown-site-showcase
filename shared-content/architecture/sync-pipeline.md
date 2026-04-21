---
title: Sync Pipeline
description: How the repository fans out one Markdown tree into multiple framework roots.
---

# Sync Pipeline

The custom pipeline is intentionally thin:

1. load shared repository metadata
2. clear generated content from each framework root
3. copy `shared-content/` into each site workspace
4. build each framework with its own base path
5. assemble the outputs into `dist/`

## Why Copy Instead Of Share Directly

Each generator is simpler and more reliable when it can use its expected
directory layout. A small sync step is cheaper than fighting framework
assumptions in multiple different ways.

## Related Pages

- [Content Model](../concepts/content-model.md)
- [Authoring Flow](../workflows/authoring-flow.md)
- [Tooling Notes](../reference/tooling-notes.md)
