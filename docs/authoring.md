# Authoring

Edit Markdown only in `content/`.

Do not hand-edit generated copies inside `sites/`. Those directories are
rebuilt by the sync script or bypassed entirely in the Quartz build.

## Content Rules

- use standard Markdown
- keep frontmatter minimal and portable
- prefer relative links between pages
- use `index.md` for section hubs

## Generator Boundary

- VitePress and Starlight depend on generated copies because their default
  source layouts are stricter.
- Quartz reads the canonical content tree directly via its build flag.
