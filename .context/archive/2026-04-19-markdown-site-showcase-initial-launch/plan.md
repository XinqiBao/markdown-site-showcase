# Markdown Site Showcase Implementation Plan

## Execution Order

1. write public docs and local continuity files
2. drive the shared content pipeline with tests
3. author canonical content in `content/`
4. wire VitePress, Starlight, and Quartz into one build flow
5. add GitHub Pages deployment and verify the public URLs

## Verification Targets

- `npm test`
- `npm run build`
- Pages workflow success on `main`
- `200` responses for `/`, `/vitepress/`, `/starlight/`, and `/quartz/`

## Current Focus

The remaining work is remote publication and post-push verification.
