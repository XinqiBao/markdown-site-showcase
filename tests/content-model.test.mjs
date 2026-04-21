import test from 'node:test'
import assert from 'node:assert/strict'

import { loadSiteConfig } from '../lib/content-model.mjs'

const repoRoot = new URL('../', import.meta.url)

test('loadSiteConfig exposes repository and demo metadata', async () => {
  const config = await loadSiteConfig(repoRoot)

  assert.equal(config.repoName, 'markdown-site-showcase')
  assert.equal(config.siteUrl, 'https://xinqibao.github.io')
  assert.deepEqual(
    config.demos.map((demo) => demo.id),
    ['vitepress', 'starlight', 'quartz', 'docusaurus', 'eleventy'],
  )
  assert.equal(config.getDemoBasePath('starlight'), '/markdown-site-showcase/starlight/')
  assert.equal(config.getDemoBasePath('docusaurus'), '/markdown-site-showcase/docusaurus/')
  assert.equal(config.getDemoBasePath('eleventy'), '/markdown-site-showcase/eleventy/')
})
