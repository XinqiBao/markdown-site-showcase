# Markdown Site Showcase Expansion Plan

## Execution Order

1. record the approved shared-content and per-site copy model
2. add failing tests for the renamed canonical tree and Quartz local-copy flow
3. rename the canonical content root and update the sync pipeline
4. switch Quartz to its local synced copy with a narrow gitignore override
5. add Docusaurus as a new site workspace
6. add Eleventy as a new site workspace
7. refresh docs, landing page content, and verification coverage

## Verification Targets

- `npm test`
- `npm run build`
- `npm run verify`
- public output contains the root page plus all sub-sites

## Commit Strategy

- one docs commit for the approved expansion packet
- one architecture cleanup commit for `shared-content/` and Quartz alignment
- one commit per new demo site
- one final docs and verification commit if needed
