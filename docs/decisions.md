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

Use `content/` as the source of truth.

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

## Mixed Integration Model

VitePress and Starlight consume generated copies. Quartz builds from the
canonical source directly.

Why:

- VitePress and Starlight work more naturally with framework-native content roots
- Quartz respects `gitignore` during file discovery, so generated content roots
  are brittle there
- reading canonical content directly is the smallest reliable fix for Quartz
