import test from 'node:test'
import assert from 'node:assert/strict'

import { renderLandingPage } from '../lib/landing-page.mjs'

test('renderLandingPage links to each generated sub-site', () => {
  const html = renderLandingPage({
    repoName: 'markdown-site-showcase',
    demos: [
      {
        id: 'vitepress',
        name: 'VitePress',
        href: '/markdown-site-showcase/vitepress/',
        description: 'Structured docs',
      },
      {
        id: 'starlight',
        name: 'Starlight',
        href: '/markdown-site-showcase/starlight/',
        description: 'Handbook docs',
      },
      {
        id: 'quartz',
        name: 'Quartz',
        href: '/markdown-site-showcase/quartz/',
        description: 'Knowledge garden',
      },
      {
        id: 'docusaurus',
        name: 'Docusaurus',
        href: '/markdown-site-showcase/docusaurus/',
        description: 'Product docs',
      },
    ],
  })

  assert.match(html, /href="\/markdown-site-showcase\/vitepress\/"/)
  assert.match(html, /href="\/markdown-site-showcase\/starlight\/"/)
  assert.match(html, /href="\/markdown-site-showcase\/quartz\/"/)
  assert.match(html, /href="\/markdown-site-showcase\/docusaurus\/"/)
  assert.match(html, /One shared Markdown source, multiple reading models/)
})
