---
title: Authoring Flow
description: The shortest reliable path from Markdown edit to published comparison.
---

# Authoring Flow

Use this sequence:

1. Edit or add a page in `shared-content/`.
2. Run the sync step so each site gets a fresh generated copy.
3. Build the landing page and the site demos.
4. Check the assembled `dist/` output locally.
5. Push once and let GitHub Pages publish the whole artifact.

## Why This Flow Works

It keeps the repository honest. The source stays single, the generated copies
stay disposable, and the public output stays easy to inspect.

## Related Pages

- [Review Checklist](./review-checklist.md)
- [Sync Pipeline](../architecture/sync-pipeline.md)
- [Deployment Paths](../topics/deployment-paths.md)
