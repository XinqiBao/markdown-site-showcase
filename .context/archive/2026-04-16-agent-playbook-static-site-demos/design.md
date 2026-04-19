# Agent Playbook Static Site Demos

Status: approved-design
Date: 2026-04-16
Scope: demo comparison for future Markdown knowledge-site direction
Intent: compare three static-site models using one shared fake content set

## Summary

Build three separate static-site demos inside this workspace's `repos/`
directory and deploy each as a public GitHub Pages project site under the
user's GitHub account.

The demos will use the same fictional `AI agent playbook` content so the user
can compare site-model differences directly rather than comparing different
content sets.

The three demo directions are:

- `VitePress` for structured docs
- `Astro Starlight` for a hybrid handbook
- `Quartz` for a networked knowledge garden

## Goals

- show what the same Markdown knowledge base feels like in three different
  publishing models
- make the comparison concrete through real deployed sites rather than mockups
- bias the content toward the user's likely future shape: document-first,
  layered, and link-enhanced
- keep the first round simple enough that the user can discard two directions
  without sunk-cost regret

## Non-Goals

- building a production-grade multi-site shared-content pipeline
- publishing the user's real repository content
- adding custom domains, auth, analytics, comments, or external search
- proving a permanent winner through metrics rather than hands-on comparison
- optimizing for the most feature-rich setup instead of the clearest contrast

## Deliverables

- three local demo projects under `~/git/agent-playbook-static-site-demos/repos/`
- three public GitHub repositories
- three GitHub Pages project-site URLs
- one fictional but coherent Markdown content set rendered three ways

## Repository Layout

The demos will be created as three independent repositories:

- `~/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress`
- `~/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight`
- `~/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz`

Independence is intentional for v1:

- each demo can be deployed and evaluated in isolation
- no shared build orchestration is required
- the comparison stays focused on authoring and browsing behavior
- later convergence on one direction remains straightforward

## Content Model

The shared fictional topic is `AI agent playbook`.

Planned page set:

- `Start Here`
- `Context Model`
- `Agent Workflow`
- `Review Checklist`
- `Knowledge Lifecycle`
- `Prompt Patterns`
- `Tooling Notes`
- `Glossary`
- `Publishing Paths`

Planned content characteristics:

- clear top-level hierarchy
- at least two to three levels of navigation depth
- overview and hub-style pages
- cross-page links between related concepts
- enough relationship density to expose the strengths and weaknesses of all
  three site models

## Markdown Authoring Constraints

To keep the comparison fair, the content will use the lowest-complexity common
denominator where practical:

- standard Markdown files
- explicit file and relative-link structure
- limited frontmatter
- no site-specific syntax as the primary authoring model

Site-specific affordances may be added only where needed to demonstrate the
intended character of each platform, but the common content should remain
visibly comparable.

## Demo Designs

### 1. Structured Docs: VitePress

Primary emphasis:

- sidebar-first navigation
- chapter ordering
- previous and next reading flow
- explicit landing page and section entrypoints

What this demo should reveal:

- whether the user's future knowledge base benefits from strong structure and
  predictable navigation above all else
- whether frequent Markdown changes remain easy to manage when hierarchy is the
  primary organizing tool

### 2. Hybrid Handbook: Astro Starlight

Primary emphasis:

- readable public-facing handbook presentation
- topic hubs and curated reading paths
- structure-first navigation with stronger browsing affordances than pure docs

What this demo should reveal:

- whether the best fit is a publishable knowledge handbook rather than a pure
  product-docs site
- whether the user prefers a balance of stable hierarchy and lighter
  exploratory navigation

### 3. Networked Garden: Quartz

Primary emphasis:

- note-to-note traversal
- related pages and backlinks where supported
- exploratory browsing over linear reading

What this demo should reveal:

- whether the user's future content would benefit from stronger relationship
  browsing than directory browsing
- whether the reduced emphasis on stable reading order is acceptable

## Deployment Model

Each repository will:

- be pushed to the user's GitHub account
- be public
- deploy to GitHub Pages through GitHub Actions
- publish as a separate project site

Expected URL shape:

- `https://xinqibao.github.io/agent-playbook-demo-vitepress/`
- `https://xinqibao.github.io/agent-playbook-demo-starlight/`
- `https://xinqibao.github.io/agent-playbook-demo-quartz/`

Public project sites are the intended target because the current account
context does not establish Enterprise-only private Pages behavior as an
available constraint.

## Components

The implementation will have four component types:

1. content files
2. site-generator configuration
3. deployment workflow
4. minimal visual customization for recognizably distinct output

The first round will avoid custom application code unless a platform requires a
small integration point for navigation or build correctness.

## Content Flow

The content flow is intentionally simple:

1. author Markdown in each demo repository
2. run the generator locally
3. verify navigation and links
4. push to GitHub
5. let GitHub Actions build and publish to Pages
6. compare the resulting public URLs side by side

This flow prioritizes clarity over DRYness. Shared-source automation is deferred
until after the user chooses a preferred direction.

## Error Handling And Operational Boundaries

Known operational risks:

- GitHub Pages base-path mistakes can break asset and link resolution
- generator-specific frontmatter or path assumptions may diverge
- Quartz may encourage a browsing model that weakens the document-entrypoint
  feel the user currently values

Mitigations:

- use explicit project-site base URLs from the start
- keep the content set small and manually validated
- avoid platform-specific syntax in the core Markdown
- treat any generator-specific adaptation as a thin compatibility layer rather
  than a content rewrite

## Verification Plan

Each demo must be verified locally and after deployment.

Local verification:

- install dependencies successfully
- run the local dev or build command
- confirm homepage clarity
- confirm multi-level navigation renders
- confirm cross-page links work

Deployed verification:

- GitHub Actions succeeds
- GitHub Pages site loads at the expected project URL
- desktop navigation is correct
- mobile rendering is acceptable
- no obvious broken assets or broken relative links remain

## Success Criteria

This comparison is successful if the user can answer all of the following after
reviewing the deployed demos:

- which reading experience feels right
- which authoring model feels maintainable
- whether the future real repository should be doc-first, hybrid, or
  relationship-first
- which single ecosystem should be taken forward into a real content version

## Open Decision After Demo Review

The post-demo decision is not "which platform is objectively best."

The real decision is:

- which platform best fits a document-first knowledge base that will evolve
  through frequent Markdown changes while still benefiting from cross-links and
  richer browse paths

## Notes

- This document is written outside a git repository, so it cannot be committed
  from the current working directory without first choosing a repository to
  hold planning artifacts.
- Subagent-based spec review was not used here because the current tool-policy
  constraints do not authorize spawning subagents unless explicitly requested by
  the user.
