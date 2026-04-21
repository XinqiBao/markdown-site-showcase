const repoName = 'markdown-site-showcase'
const siteUrl = 'https://xinqibao.github.io'

const demos = [
  {
    id: 'vitepress',
    name: 'VitePress',
    description: 'Structured docs with a clear sidebar and reading order.',
  },
  {
    id: 'starlight',
    name: 'Starlight',
    description: 'Handbook-style docs with a polished default presentation.',
  },
  {
    id: 'quartz',
    name: 'Quartz',
    description: 'Knowledge-garden browsing with backlinks and graph views.',
  },
  {
    id: 'docusaurus',
    name: 'Docusaurus',
    description: 'Product-docs defaults with versioning and team-scale structure.',
  },
]

const topNav = [
  { text: 'Start Here', link: '/' },
  { text: 'Concepts', link: '/concepts/' },
  { text: 'Workflows', link: '/workflows/' },
  { text: 'Architecture', link: '/architecture/' },
  { text: 'Reference', link: '/reference/' },
]

const sections = [
  {
    text: 'Start',
    items: [{ text: 'Overview', link: '/' }],
  },
  {
    text: 'Concepts',
    items: [
      { text: 'Concepts Hub', link: '/concepts/' },
      { text: 'Content Model', link: '/concepts/content-model' },
    ],
  },
  {
    text: 'Workflows',
    items: [
      { text: 'Workflows Hub', link: '/workflows/' },
      { text: 'Authoring Flow', link: '/workflows/authoring-flow' },
      { text: 'Review Checklist', link: '/workflows/review-checklist' },
    ],
  },
  {
    text: 'Architecture',
    items: [
      { text: 'Architecture Hub', link: '/architecture/' },
      { text: 'Sync Pipeline', link: '/architecture/sync-pipeline' },
    ],
  },
  {
    text: 'Patterns',
    items: [
      { text: 'Patterns Hub', link: '/patterns/' },
      { text: 'Link Patterns', link: '/patterns/link-patterns' },
    ],
  },
  {
    text: 'Reference',
    items: [
      { text: 'Reference Hub', link: '/reference/' },
      { text: 'Tooling Notes', link: '/reference/tooling-notes' },
      { text: 'Glossary', link: '/reference/glossary' },
    ],
  },
  {
    text: 'Topics',
    items: [
      { text: 'Topics Hub', link: '/topics/' },
      { text: 'Deployment Paths', link: '/topics/deployment-paths' },
    ],
  },
]

export const sharedSiteConfig = {
  repoName,
  siteUrl,
  demos,
  topNav,
  sections,
  repoTitle: 'Markdown Site Showcase',
  tagline: 'One shared Markdown source, multiple reading models',
  repoDescription: 'A maintenance-first demo for publishing one shared Markdown source through multiple static-site generators.',
}
