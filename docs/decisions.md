# Decisions

This file records the key decisions behind the repository so future sessions do
not need to reconstruct the rationale from commit history.

## One Repository

Use one Git repository instead of one repository per framework.

Why:

- one place to maintain documentation
- one GitHub Pages site to publish
- one canonical content set to update

## One Canonical Content Tree

Use `shared-content/` as the source of truth.

Why:

- avoids content drift across frameworks
- keeps authoring framework-agnostic
- makes the comparison about rendering and navigation rather than duplicated edits

## Thin Custom Layer

Keep custom code limited to sync, landing-page generation, and artifact assembly.

Why:

- the goal is comparison, not building a publishing platform
- framework defaults should stay visible
- less custom code means lower maintenance cost

## Synced Site Inputs

All site demos consume synced local copies of the canonical tree.

Why:

- keeps the repository mental model uniform across demos
- lets each site workspace preserve its framework-native content layout
- keeps authoring isolated to one canonical tree while keeping site-local inputs
  explicit

## Narrow Quartz Override

Keep a small Quartz-specific override that disables gitignore filtering for the
site-local input copy.

Why:

- Quartz otherwise filters out ignored generated inputs during content discovery
- the override is smaller than restructuring the repository around Quartz alone
- the custom behavior stays isolated to the local Quartz workspace
