---
title: Content Model
description: The authoring rules that keep one Markdown source usable everywhere.
---

# Content Model

The canonical source lives in `content/` and uses only the Markdown features
that all three generators handle cleanly:

- short frontmatter with titles and descriptions
- relative links between pages
- section hubs with `index.md`
- plain headings, lists, tables, and code fences

## Why This Matters

The less generator-specific syntax you put in the content, the easier it is to
rebuild or swap the rendering layer later.

## Practical Rule

If a page needs a special feature that only one generator understands, treat it
as an exception and isolate it. The default path should stay portable.

## Related Pages

- [Link Patterns](../patterns/link-patterns.md)
- [Tooling Notes](../reference/tooling-notes.md)
- [Deployment Paths](../topics/deployment-paths.md)
