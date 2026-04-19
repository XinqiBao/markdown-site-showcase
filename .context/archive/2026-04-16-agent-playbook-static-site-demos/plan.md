# Agent Playbook Static Site Demos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build three public GitHub Pages demos that render the same fictional `AI agent playbook` content using VitePress, Astro Starlight, and Quartz.

**Architecture:** Create three independent repositories under this workspace's `repos/` directory, keep the Markdown structure logically equivalent across all three, and use the same GitHub Pages custom-workflow pattern in every repo so the comparison isolates information architecture and reading experience rather than deployment differences. Because these projects are configuration-and-content driven, verification will rely on repeatable build-and-smoke-test loops instead of unit-test-first TDD.

**Tech Stack:** Node.js 23.x locally, npm 10.x, GitHub CLI, GitHub Pages, GitHub Actions, VitePress, Astro + Starlight, Quartz 4

---

## File Structure Map

### Shared local workspace

- `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/`
  - `package.json`: VitePress scripts and dependencies
  - `docs/.vitepress/config.mts`: site title, base path, nav, sidebar, search
  - `docs/.vitepress/theme/custom.css`: light visual differentiation
  - `docs/index.md`: landing page
  - `docs/concepts/index.md`: concepts hub
  - `docs/concepts/context-model.md`: layered context explanation
  - `docs/workflows/index.md`: workflows hub
  - `docs/workflows/agent-workflow.md`: end-to-end workflow page
  - `docs/workflows/review-checklist.md`: checklist page
  - `docs/governance/index.md`: governance hub
  - `docs/governance/knowledge-lifecycle.md`: lifecycle page
  - `docs/patterns/index.md`: patterns hub
  - `docs/patterns/prompt-patterns.md`: prompt-pattern page
  - `docs/reference/index.md`: reference hub
  - `docs/reference/tooling-notes.md`: tooling page
  - `docs/reference/glossary.md`: glossary page
  - `docs/topics/index.md`: topic hub
  - `docs/topics/publishing-paths.md`: publishing comparison page
  - `.github/workflows/deploy.yml`: GitHub Pages build and deploy workflow
  - `README.md`: repo-specific usage notes

- `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/`
  - `package.json`: Astro/Starlight scripts and dependencies
  - `astro.config.mjs`: site URL, base path, sidebar, integrations
  - `src/styles/custom.css`: light visual differentiation
  - `src/content/docs/index.mdx`: landing page
  - `src/content/docs/concepts/index.md`: concepts hub
  - `src/content/docs/concepts/context-model.md`: layered context explanation
  - `src/content/docs/workflows/index.md`: workflows hub
  - `src/content/docs/workflows/agent-workflow.md`: end-to-end workflow page
  - `src/content/docs/workflows/review-checklist.md`: checklist page
  - `src/content/docs/governance/index.md`: governance hub
  - `src/content/docs/governance/knowledge-lifecycle.md`: lifecycle page
  - `src/content/docs/patterns/index.md`: patterns hub
  - `src/content/docs/patterns/prompt-patterns.md`: prompt-pattern page
  - `src/content/docs/reference/index.md`: reference hub
  - `src/content/docs/reference/tooling-notes.md`: tooling page
  - `src/content/docs/reference/glossary.md`: glossary page
  - `src/content/docs/topics/index.md`: topic hub
  - `src/content/docs/topics/publishing-paths.md`: publishing comparison page
  - `.github/workflows/deploy.yml`: GitHub Pages build and deploy workflow
  - `README.md`: repo-specific usage notes

- `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/`
  - `package.json`: Quartz scripts and dependencies
  - `quartz.config.ts`: site title, base URL, page options, plugins
  - `quartz.layout.ts`: explorer, backlinks, and graph layout choices
  - `quartz/styles/custom.scss`: light visual differentiation if needed
  - `content/index.md`: landing page
  - `content/concepts/index.md`: concepts hub
  - `content/concepts/context-model.md`: layered context explanation
  - `content/workflows/index.md`: workflows hub
  - `content/workflows/agent-workflow.md`: end-to-end workflow page
  - `content/workflows/review-checklist.md`: checklist page
  - `content/governance/index.md`: governance hub
  - `content/governance/knowledge-lifecycle.md`: lifecycle page
  - `content/patterns/index.md`: patterns hub
  - `content/patterns/prompt-patterns.md`: prompt-pattern page
  - `content/reference/index.md`: reference hub
  - `content/reference/tooling-notes.md`: tooling page
  - `content/reference/glossary.md`: glossary page
  - `content/topics/index.md`: topic hub
  - `content/topics/publishing-paths.md`: publishing comparison page
  - `.github/workflows/deploy.yml`: GitHub Pages build and deploy workflow
  - `README.md`: repo-specific usage notes

### Deployment outputs

- `https://xinqibao.github.io/agent-playbook-demo-vitepress/`
- `https://xinqibao.github.io/agent-playbook-demo-starlight/`
- `https://xinqibao.github.io/agent-playbook-demo-quartz/`

## Task 1: Preflight And Workspace Guardrails

**Files:**
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/`

- [ ] **Step 1: Verify toolchain and account access**

Run:

```bash
node -v
npm -v
gh auth status
```

Expected:

- `node -v` prints `v23.x` or another Node 22+ version
- `npm -v` prints `10.x` or newer
- `gh auth status` reports the `XinqiBao` account as authenticated

- [ ] **Step 2: Check for collisions before creating the demo repos**

Run:

```bash
for repo in agent-playbook-demo-vitepress agent-playbook-demo-starlight agent-playbook-demo-quartz; do
  test -e "/Users/xbao/git/agent-playbook-static-site-demos/repos/$repo" && echo "EXISTS $repo" || echo "CLEAR $repo"
done
```

Expected:

- every line prints `CLEAR <repo>`
- if any path already exists, stop and decide whether to rename or remove it

- [ ] **Step 3: Create a scratch note with the canonical page list for manual parity checks**

Create:

```text
/Users/xbao/git/agent-playbook-static-site-demos/.context/work/2026-04-16-agent-playbook-static-site-demos/page-list.txt
```

Contents:

```text
index
concepts/index
concepts/context-model
workflows/index
workflows/agent-workflow
workflows/review-checklist
governance/index
governance/knowledge-lifecycle
patterns/index
patterns/prompt-patterns
reference/index
reference/tooling-notes
reference/glossary
topics/index
topics/publishing-paths
```

- [ ] **Step 4: Commit the planning artifacts if a planning repo is chosen**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos
git add .
git commit -m "chore: create demo workspace"
```

Expected:

- the workspace entrypoints, work packet, and relocated design and plan files
  are committed

## Task 2: Scaffold The VitePress Demo Shell

**Files:**
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/package.json`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/package-lock.json`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/.vitepress/config.mts`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/.vitepress/theme/custom.css`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/README.md`

- [ ] **Step 1: Initialize the repository and install VitePress**

Run:

```bash
mkdir -p /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress
git init -b main
npm init -y
npm pkg set type=module
npm pkg set scripts.docs:dev="vitepress dev docs --host 127.0.0.1 --port 4173"
npm pkg set scripts.docs:build="vitepress build docs"
npm pkg set scripts.docs:preview="vitepress preview docs --host 127.0.0.1 --port 4173"
npm install -D vitepress@latest
mkdir -p docs/.vitepress/theme docs/concepts docs/workflows docs/governance docs/patterns docs/reference docs/topics
```

Expected:

- `.git/`, `package.json`, and `package-lock.json` exist
- `npm install` exits `0`

- [ ] **Step 2: Write the base config, theme CSS, placeholder home page, and repo README**

Create `docs/.vitepress/config.mts`:

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Agent Playbook Demo',
  description: 'Structured-docs version of a fictional AI agent playbook',
  base: '/agent-playbook-demo-vitepress/',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    search: { provider: 'local' },
    nav: [
      { text: 'Start Here', link: '/' },
      { text: 'Concepts', link: '/concepts/' },
      { text: 'Workflows', link: '/workflows/' },
      { text: 'Reference', link: '/reference/' }
    ],
    sidebar: [
      {
        text: 'Start',
        items: [{ text: 'Overview', link: '/' }]
      },
      {
        text: 'Concepts',
        items: [
          { text: 'Concepts Hub', link: '/concepts/' },
          { text: 'Context Model', link: '/concepts/context-model' }
        ]
      },
      {
        text: 'Workflows',
        items: [
          { text: 'Workflows Hub', link: '/workflows/' },
          { text: 'Agent Workflow', link: '/workflows/agent-workflow' },
          { text: 'Review Checklist', link: '/workflows/review-checklist' }
        ]
      },
      {
        text: 'Governance',
        items: [
          { text: 'Governance Hub', link: '/governance/' },
          { text: 'Knowledge Lifecycle', link: '/governance/knowledge-lifecycle' }
        ]
      },
      {
        text: 'Patterns',
        items: [
          { text: 'Patterns Hub', link: '/patterns/' },
          { text: 'Prompt Patterns', link: '/patterns/prompt-patterns' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Reference Hub', link: '/reference/' },
          { text: 'Tooling Notes', link: '/reference/tooling-notes' },
          { text: 'Glossary', link: '/reference/glossary' }
        ]
      },
      {
        text: 'Topics',
        items: [
          { text: 'Topics Hub', link: '/topics/' },
          { text: 'Publishing Paths', link: '/topics/publishing-paths' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/XinqiBao/agent-playbook-demo-vitepress' }]
  }
})
```

Create `docs/.vitepress/theme/custom.css`:

```css
:root {
  --vp-c-brand-1: #0f766e;
  --vp-c-brand-2: #115e59;
  --vp-c-brand-3: #134e4a;
}
```

Create `docs/index.md`:

```md
---
layout: home
title: Agent Playbook Demo

hero:
  name: Structured Docs
  text: A document-first AI agent playbook
  tagline: Same fictional content, rendered as a classic docs site
  actions:
    - theme: brand
      text: Start Reading
      link: /concepts/
    - theme: alt
      text: Review Workflows
      link: /workflows/

features:
  - title: Stable Entrypoints
    details: Readers always know where to start and how to move deeper.
  - title: Strong Navigation
    details: Sections are optimized for ordered exploration instead of note hopping.
  - title: Markdown Friendly
    details: Frequent edits stay manageable because structure is explicit.
---
```

Create `README.md`:

```md
# agent-playbook-demo-vitepress

Structured-docs demo for comparing Markdown knowledge-site models.

## Local Commands

- `npm run docs:dev`
- `npm run docs:build`
- `npm run docs:preview`
```

- [ ] **Step 3: Verify the VitePress CLI resolves before adding the full page set**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress
npx vitepress --version
```

Expected:

- the command exits `0`
- a VitePress version string is printed

- [ ] **Step 4: Commit the shell**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress
git add .
git commit -m "feat: scaffold vitepress demo shell"
```

## Task 3: Author The VitePress Content Set And Local Smoke Checks

**Files:**
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/concepts/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/concepts/context-model.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/workflows/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/workflows/agent-workflow.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/workflows/review-checklist.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/governance/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/governance/knowledge-lifecycle.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/patterns/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/patterns/prompt-patterns.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/reference/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/reference/tooling-notes.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/reference/glossary.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/topics/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/topics/publishing-paths.md`
- Modify: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/docs/index.md`

- [ ] **Step 1: Write the hub pages with strong cross-links**

Implement these pages:

- `docs/concepts/index.md`: explain the information model and link to `Context Model`, `Knowledge Lifecycle`, and `Glossary`
- `docs/workflows/index.md`: explain the operating flow and link to `Agent Workflow`, `Review Checklist`, and `Prompt Patterns`
- `docs/governance/index.md`: explain lifecycle and scope boundaries and link to `Knowledge Lifecycle`, `Context Model`, and `Publishing Paths`
- `docs/patterns/index.md`: explain reusable writing patterns and link to `Prompt Patterns`, `Review Checklist`, and `Tooling Notes`
- `docs/reference/index.md`: explain the quick-reference role and link to `Tooling Notes`, `Glossary`, and `Publishing Paths`
- `docs/topics/index.md`: explain the themed-entry role and link to `Publishing Paths`, `Agent Workflow`, and `Knowledge Lifecycle`

Each hub page must contain:

- a one-paragraph overview
- a `## Start Here` section
- a `## Related Pages` section with normal Markdown links

- [ ] **Step 2: Write the content pages with the same logical shape used later in the other two demos**

Implement these pages:

- `docs/concepts/context-model.md`: sections for `Purpose`, `Layers`, `Cold Start Path`, and `Failure Modes`
- `docs/workflows/agent-workflow.md`: sections for `Trigger`, `Read Path`, `Execution Loop`, and `Exit Conditions`
- `docs/workflows/review-checklist.md`: sections for `Before Starting`, `During Changes`, and `Before Publishing`
- `docs/governance/knowledge-lifecycle.md`: sections for `Draft`, `Working`, `Canonical`, `Superseded`, and `Archive`
- `docs/patterns/prompt-patterns.md`: sections for `Framing`, `Constraint Capture`, `Change Requests`, and `Comparison Requests`
- `docs/reference/tooling-notes.md`: sections for `GitHub Pages`, `GitHub CLI`, `Markdown`, and `Static Site Generators`
- `docs/reference/glossary.md`: short definitions for `entrypoint`, `scope`, `canonical`, `working note`, `archive`, and `playbook`
- `docs/topics/publishing-paths.md`: compare `structured docs`, `hybrid handbook`, and `networked garden`

Every page must include:

- one sentence linking back to its hub page
- one `## Related Pages` section
- at least two outbound links to non-sibling pages

- [ ] **Step 3: Rebuild and preview the VitePress demo**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress
npm run docs:build
npm run docs:dev
```

Expected:

- build exits `0`
- dev server starts on `http://127.0.0.1:4173`
- stop the dev server manually with `Ctrl-C` after confirming the URL loads

- [ ] **Step 4: Manual smoke-check the main routes**

Check these routes in a browser:

- `http://127.0.0.1:4173/agent-playbook-demo-vitepress/`
- `http://127.0.0.1:4173/agent-playbook-demo-vitepress/concepts/`
- `http://127.0.0.1:4173/agent-playbook-demo-vitepress/workflows/agent-workflow`
- `http://127.0.0.1:4173/agent-playbook-demo-vitepress/reference/glossary`

Expected:

- sidebar renders
- links resolve
- homepage clearly reads as structured docs rather than a note garden

- [ ] **Step 5: Commit the VitePress content**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress
git add .
git commit -m "feat: add vitepress demo content"
```

## Task 4: Add VitePress GitHub Pages Deployment And Publish

**Files:**
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/.github/workflows/deploy.yml`
- Modify: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress/README.md`

- [ ] **Step 1: Add the GitHub Pages workflow**

Create `.github/workflows/deploy.yml`:

```yml
name: Deploy GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: actions/setup-node@v5
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run docs:build
      - uses: actions/upload-pages-artifact@v4
        with:
          path: docs/.vitepress/dist

  deploy:
    runs-on: ubuntu-latest
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Append to `README.md`:

```md
## Public URL

Expected Pages URL: `https://xinqibao.github.io/agent-playbook-demo-vitepress/`
```

- [ ] **Step 2: Commit the deployment setup locally**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress
git add .
git commit -m "ci: add vitepress pages deployment"
```

Expected:

- the workflow and README changes are committed locally

- [ ] **Step 3: Create the remote repository and push the code**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-vitepress
gh repo create XinqiBao/agent-playbook-demo-vitepress --public --source=. --remote=origin --push
```

Expected:

- GitHub repo exists
- current branch tracks `origin/main`

- [ ] **Step 4: Enable GitHub Actions as the Pages source if GitHub prompts for it**

Manual check:

- open repository `Settings > Pages`
- ensure the site uses `GitHub Actions`

- [ ] **Step 5: Verify the workflow run and public URL**

Run:

```bash
gh run list -R XinqiBao/agent-playbook-demo-vitepress --limit 5
curl -I https://xinqibao.github.io/agent-playbook-demo-vitepress/
```

Expected:

- the latest workflow run ends in `completed success`
- `curl -I` returns `200 OK` after the deployment finishes

## Task 5: Scaffold The Starlight Demo Shell

**Files:**
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/package.json`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/astro.config.mjs`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/src/styles/custom.css`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/README.md`

- [ ] **Step 1: Create the Starlight starter**

Run:

```bash
npm create astro@latest /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight -- --template starlight
```

If prompted:

- install dependencies: `Yes`
- initialize git: `No`

Then run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight
rm -rf .git
git init -b main
```

Expected:

- Astro/Starlight starter files exist
- `.git/` exists

- [ ] **Step 2: Replace the generated config with the demo-specific site settings**

Create `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  site: 'https://xinqibao.github.io',
  base: '/agent-playbook-demo-starlight',
  integrations: [
    starlight({
      title: 'Agent Playbook Demo',
      description: 'Hybrid-handbook version of a fictional AI agent playbook',
      customCss: ['./src/styles/custom.css'],
      social: {
        github: 'https://github.com/XinqiBao/agent-playbook-demo-starlight'
      },
      sidebar: [
        {
          label: 'Start',
          items: [{ label: 'Overview', link: '/' }]
        },
        {
          label: 'Concepts',
          items: [
            { label: 'Concepts Hub', link: '/concepts/' },
            { label: 'Context Model', link: '/concepts/context-model/' }
          ]
        },
        {
          label: 'Workflows',
          items: [
            { label: 'Workflows Hub', link: '/workflows/' },
            { label: 'Agent Workflow', link: '/workflows/agent-workflow/' },
            { label: 'Review Checklist', link: '/workflows/review-checklist/' }
          ]
        },
        {
          label: 'Governance',
          items: [
            { label: 'Governance Hub', link: '/governance/' },
            { label: 'Knowledge Lifecycle', link: '/governance/knowledge-lifecycle/' }
          ]
        },
        {
          label: 'Patterns',
          items: [
            { label: 'Patterns Hub', link: '/patterns/' },
            { label: 'Prompt Patterns', link: '/patterns/prompt-patterns/' }
          ]
        },
        {
          label: 'Reference',
          items: [
            { label: 'Reference Hub', link: '/reference/' },
            { label: 'Tooling Notes', link: '/reference/tooling-notes/' },
            { label: 'Glossary', link: '/reference/glossary/' }
          ]
        },
        {
          label: 'Topics',
          items: [
            { label: 'Topics Hub', link: '/topics/' },
            { label: 'Publishing Paths', link: '/topics/publishing-paths/' }
          ]
        }
      ]
    })
  ]
})
```

Create `src/styles/custom.css`:

```css
:root {
  --sl-color-accent-low: #0f3d4c;
  --sl-color-accent: #2d8aa8;
  --sl-color-accent-high: #c4edf6;
}
```

Create `README.md`:

```md
# agent-playbook-demo-starlight

Hybrid-handbook demo for comparing Markdown knowledge-site models.

## Local Commands

- `npm run dev`
- `npm run build`
- `npm run preview`
```

- [ ] **Step 3: Remove unused template docs and verify the Astro CLI resolves**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight
rm -rf src/content/docs/*
mkdir -p src/content/docs/concepts src/content/docs/workflows src/content/docs/governance src/content/docs/patterns src/content/docs/reference src/content/docs/topics
npx astro --version
```

Expected:

- the command exits `0`
- an Astro version string is printed

- [ ] **Step 4: Commit the shell**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight
git add .
git commit -m "feat: scaffold starlight demo shell"
```

## Task 6: Author The Starlight Content Set And Local Smoke Checks

**Files:**
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/src/content/docs/index.mdx`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/src/content/docs/concepts/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/src/content/docs/concepts/context-model.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/src/content/docs/workflows/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/src/content/docs/workflows/agent-workflow.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/src/content/docs/workflows/review-checklist.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/src/content/docs/governance/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/src/content/docs/governance/knowledge-lifecycle.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/src/content/docs/patterns/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/src/content/docs/patterns/prompt-patterns.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/src/content/docs/reference/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/src/content/docs/reference/tooling-notes.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/src/content/docs/reference/glossary.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/src/content/docs/topics/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/src/content/docs/topics/publishing-paths.md`

- [ ] **Step 1: Write the landing page as a handbook-style entrypoint**

Create `src/content/docs/index.mdx` with:

- frontmatter title `Agent Playbook Demo`
- intro text explaining this is the `hybrid handbook` version
- a short three-card overview linking to `Concepts`, `Workflows`, and `Reference`
- a `## Reading Paths` section linking to `Topics/Publishing Paths`

- [ ] **Step 2: Write the hub and content pages using the same conceptual structure as the VitePress demo**

Reuse the same logical content from Task 3 with Starlight frontmatter where needed:

- every file must have a `title`
- hub pages must include `Start Here` and `Related Pages`
- content pages must link back to their hub page and at least two non-sibling pages

The individual page responsibilities remain:

- `concepts/context-model.md`: layered context model
- `workflows/agent-workflow.md`: execution loop
- `workflows/review-checklist.md`: review checklist
- `governance/knowledge-lifecycle.md`: lifecycle states
- `patterns/prompt-patterns.md`: prompt patterns
- `reference/tooling-notes.md`: tooling reference
- `reference/glossary.md`: glossary
- `topics/publishing-paths.md`: compare the three site models

- [ ] **Step 3: Rebuild and preview the Starlight demo**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight
npm run build
npm run dev -- --host 127.0.0.1 --port 4321
```

Expected:

- build exits `0`
- dev server starts on `http://127.0.0.1:4321`
- stop the dev server manually with `Ctrl-C` after confirming the URL loads

- [ ] **Step 4: Manual smoke-check the main routes**

Check these routes in a browser:

- `http://127.0.0.1:4321/agent-playbook-demo-starlight/`
- `http://127.0.0.1:4321/agent-playbook-demo-starlight/concepts/`
- `http://127.0.0.1:4321/agent-playbook-demo-starlight/workflows/agent-workflow/`
- `http://127.0.0.1:4321/agent-playbook-demo-starlight/reference/glossary/`

Expected:

- sidebar renders
- landing page feels more like a handbook than a raw docs index
- internal links resolve

- [ ] **Step 5: Commit the Starlight content**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight
git add .
git commit -m "feat: add starlight demo content"
```

## Task 7: Add Starlight GitHub Pages Deployment And Publish

**Files:**
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/.github/workflows/deploy.yml`
- Modify: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight/README.md`

- [ ] **Step 1: Add the shared GitHub Pages workflow pattern**

Create `.github/workflows/deploy.yml`:

```yml
name: Deploy GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: actions/setup-node@v5
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v4
        with:
          path: dist

  deploy:
    runs-on: ubuntu-latest
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Append to `README.md`:

```md
## Public URL

Expected Pages URL: `https://xinqibao.github.io/agent-playbook-demo-starlight/`
```

- [ ] **Step 2: Commit the deployment setup locally**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight
git add .
git commit -m "ci: add starlight pages deployment"
```

Expected:

- the workflow and README changes are committed locally

- [ ] **Step 3: Create the remote repository and push the code**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-starlight
gh repo create XinqiBao/agent-playbook-demo-starlight --public --source=. --remote=origin --push
```

Expected:

- GitHub repo exists
- current branch tracks `origin/main`

- [ ] **Step 4: Enable GitHub Actions as the Pages source if GitHub prompts for it**

Manual check:

- open repository `Settings > Pages`
- ensure the site uses `GitHub Actions`

- [ ] **Step 5: Verify the workflow run and public URL**

Run:

```bash
gh run list -R XinqiBao/agent-playbook-demo-starlight --limit 5
curl -I https://xinqibao.github.io/agent-playbook-demo-starlight/
```

Expected:

- the latest workflow run ends in `completed success`
- `curl -I` returns `200 OK` after the deployment finishes

## Task 8: Scaffold The Quartz Demo Shell

**Files:**
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/package.json`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/quartz.config.ts`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/quartz.layout.ts`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/quartz/styles/custom.scss`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/README.md`

- [ ] **Step 1: Bootstrap Quartz from the official repository snapshot**

Run:

```bash
git clone https://github.com/jackyzha0/quartz.git /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz
rm -rf .git
git init -b main
npm install
```

Expected:

- repo exists locally at the target path
- branch is `main`
- `npm install` exits `0`

- [ ] **Step 2: Replace the sample content with the demo-specific structure**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz
rm -rf content/*
mkdir -p content/concepts content/workflows content/governance content/patterns content/reference content/topics
```

Create `README.md`:

```md
# agent-playbook-demo-quartz

Networked-garden demo for comparing Markdown knowledge-site models.

## Local Commands

- `npx quartz build --serve`
- `npx quartz build`
```

- [ ] **Step 3: Set the site identity and layout defaults**

Update `quartz.config.ts` so that:

- `pageTitle` is `Agent Playbook Demo`
- `baseUrl` is `xinqibao.github.io/agent-playbook-demo-quartz`
- description mentions `networked-garden version of a fictional AI agent playbook`
- backlinks, explorer, and graph-oriented browsing remain enabled

Update `quartz.layout.ts` so that:

- explorer remains visible on content pages
- backlinks are visible near the end of the page
- graph or related-content components are not removed

If the default colors are too close to the other two demos, add a small accent
change in `quartz/styles/custom.scss`.

- [ ] **Step 4: Verify the Quartz CLI resolves before authoring the full content set**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz
npx quartz --help
```

Expected:

- the command exits `0`
- Quartz help text is printed

- [ ] **Step 5: Commit the shell**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz
git add .
git commit -m "feat: scaffold quartz demo shell"
```

## Task 9: Author The Quartz Content Set And Local Smoke Checks

**Files:**
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/content/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/content/concepts/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/content/concepts/context-model.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/content/workflows/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/content/workflows/agent-workflow.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/content/workflows/review-checklist.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/content/governance/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/content/governance/knowledge-lifecycle.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/content/patterns/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/content/patterns/prompt-patterns.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/content/reference/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/content/reference/tooling-notes.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/content/reference/glossary.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/content/topics/index.md`
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/content/topics/publishing-paths.md`

- [ ] **Step 1: Write the landing page so it still has a stable start point**

Create `content/index.md` with:

- an overview that explicitly says this is the `networked garden` version
- a `Start Here` section linking to `Concepts`, `Workflows`, and `Publishing Paths`
- a `Browse By Relationship` section linking to pages from multiple directories

- [ ] **Step 2: Write the hub and content pages, preserving the same conceptual content while leaning into relationship browsing**

Use the same page responsibilities defined in Tasks 3 and 6, but adapt the
writing to Quartz's strengths:

- add a `Related Pages` section to every page
- add contextual cross-links throughout the prose, not only at the end
- keep directory hubs, but make each hub page invite lateral navigation

Do not switch the core authoring model to wiki-links. Use normal Markdown links
so the content remains comparable to the other two demos.

- [ ] **Step 3: Rebuild and serve the Quartz demo locally**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz
npx quartz build --serve
```

Expected:

- build exits `0`
- local server starts
- stop the local server manually with `Ctrl-C` after confirming the main routes

- [ ] **Step 4: Manual smoke-check the main routes**

Check these routes in a browser:

- local home page
- `concepts/`
- `workflows/agent-workflow`
- `reference/glossary`

Expected:

- explorer renders
- backlinks or related-navigation affordances are visible on content pages
- browsing feels more networked than the other two demos

- [ ] **Step 5: Commit the Quartz content**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz
git add .
git commit -m "feat: add quartz demo content"
```

## Task 10: Add Quartz GitHub Pages Deployment And Publish

**Files:**
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/.github/workflows/deploy.yml`
- Modify: `/Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz/README.md`

- [ ] **Step 1: Add the shared GitHub Pages workflow pattern**

Create `.github/workflows/deploy.yml`:

```yml
name: Deploy GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - uses: actions/setup-node@v5
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npx quartz build
      - uses: actions/upload-pages-artifact@v4
        with:
          path: public

  deploy:
    runs-on: ubuntu-latest
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Append to `README.md`:

```md
## Public URL

Expected Pages URL: `https://xinqibao.github.io/agent-playbook-demo-quartz/`
```

- [ ] **Step 2: Commit the deployment setup locally**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz
git add .
git commit -m "ci: add quartz pages deployment"
```

Expected:

- the workflow and README changes are committed locally

- [ ] **Step 3: Create the remote repository and push the code**

Run:

```bash
cd /Users/xbao/git/agent-playbook-static-site-demos/repos/agent-playbook-demo-quartz
gh repo create XinqiBao/agent-playbook-demo-quartz --public --source=. --remote=origin --push
```

Expected:

- GitHub repo exists
- current branch tracks `origin/main`

- [ ] **Step 4: Enable GitHub Actions as the Pages source if GitHub prompts for it**

Manual check:

- open repository `Settings > Pages`
- ensure the site uses `GitHub Actions`

- [ ] **Step 5: Verify the workflow run and public URL**

Run:

```bash
gh run list -R XinqiBao/agent-playbook-demo-quartz --limit 5
curl -I https://xinqibao.github.io/agent-playbook-demo-quartz/
```

Expected:

- the latest workflow run ends in `completed success`
- `curl -I` returns `200 OK` after the deployment finishes

## Task 11: Cross-Demo Verification And Review Packet

**Files:**
- Create: `/Users/xbao/git/agent-playbook-static-site-demos/.context/work/2026-04-16-agent-playbook-static-site-demos/review-checklist.md`

- [ ] **Step 1: Record the final URLs and review dimensions**

Create `review-checklist.md`:

```md
# Agent Playbook Demo Review Checklist

- VitePress: https://xinqibao.github.io/agent-playbook-demo-vitepress/
- Starlight: https://xinqibao.github.io/agent-playbook-demo-starlight/
- Quartz: https://xinqibao.github.io/agent-playbook-demo-quartz/

## Compare

- Where should a first-time reader start?
- Which sidebar or navigation feels clearest?
- Which site handles cross-links best without losing structure?
- Which site feels easiest to maintain as Markdown grows?
- Which site feels most publishable?
```

- [ ] **Step 2: Smoke-check all three public sites**

Run:

```bash
curl -I https://xinqibao.github.io/agent-playbook-demo-vitepress/
curl -I https://xinqibao.github.io/agent-playbook-demo-starlight/
curl -I https://xinqibao.github.io/agent-playbook-demo-quartz/
```

Expected:

- all three return `200 OK`

- [ ] **Step 3: Review on desktop and mobile widths**

Manual checks:

- homepage readability
- sidebar or explorer usability
- at least one deep page in each demo
- at least one cross-link transition in each demo

- [ ] **Step 4: Share the review packet with the user**

Summarize:

- which demo feels most structured
- which feels most balanced
- which feels most exploratory
- any broken routes, awkward layouts, or Pages-specific issues

- [ ] **Step 5: No further commit is required for the review packet**

The review packet lives in a non-repository planning path.

## Plan Notes

- Use the same GitHub Pages custom-workflow pattern for all three repos.
- Keep all three repos public to stay within the expected Pages capabilities of
  a personal GitHub account.
- Prefer normal Markdown links over platform-specific link syntax to preserve
  comparability.
- If Quartz bootstrapping differs from the official repository defaults at
  execution time, adapt the bootstrap commands to the current official Quartz
  getting-started path without changing the content model or deployment shape.
