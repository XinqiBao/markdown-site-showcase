# Markdown Site Showcase Expansion

Status: approved-design
Date: 2026-04-20

## Summary

The repository will keep one canonical shared Markdown tree at
`shared-content/` and will sync that tree into each site workspace before
building.

This expansion keeps the authoring model simple:

- one source of truth for Markdown edits
- one local input tree per site
- one shared Pages deployment artifact

## Key Decisions

- rename the canonical tree from `content/` to `shared-content/`
- keep site-local content copies for all current and future demos
- move Quartz back to a local content copy at `sites/quartz/content/`
- keep the Quartz-specific gitignore workaround as a narrow local patch rather
  than broad repository restructuring
- continue expanding the comparison set with `Docusaurus` and `Eleventy`

## Rationale

The previous mixed model reduced code in Quartz, but it also made the repository
harder to explain: two sites consumed synced copies while Quartz consumed the
canonical tree directly.

The approved follow-up favors a more uniform mental model even if Quartz needs a
small compatibility patch. The repository remains maintenance-first because the
source of truth stays singular and the custom behavior stays narrowly scoped.
