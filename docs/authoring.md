# Authoring

Edit Markdown only in `shared-content/`.

Do not hand-edit generated copies inside `sites/`. Those directories are
rebuilt by the sync script before each build.

## Content Rules

- use standard Markdown
- keep frontmatter minimal and portable
- prefer relative links between pages
- use `index.md` for section hubs

## Generator Boundary

- All current site demos build from synced local copies.
- Quartz disables gitignore-based input filtering in this repository so its
  ignored generated copy can still be treated as a build input.
