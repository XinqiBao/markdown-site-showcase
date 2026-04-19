import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

import { syncCanonicalContent } from '../lib/sync-content.mjs'

test('syncCanonicalContent copies Markdown while preserving VitePress config', async () => {
  const root = await mkdtemp(join(tmpdir(), 'markdown-site-showcase-'))
  const contentRoot = join(root, 'content')
  const vitepressConfigRoot = join(root, 'sites/vitepress/docs/.vitepress')

  await mkdir(join(contentRoot, 'concepts'), { recursive: true })
  await writeFile(join(contentRoot, 'index.md'), '# Start\n')
  await writeFile(join(contentRoot, 'concepts/content-model.md'), '# Content Model\n')
  await mkdir(vitepressConfigRoot, { recursive: true })
  await writeFile(join(vitepressConfigRoot, 'config.mts'), 'export default {}\n')

  await syncCanonicalContent(root)

  assert.equal(
    await readFile(join(root, 'sites/vitepress/docs/index.md'), 'utf8'),
    '# Start\n',
  )
  assert.equal(
    await readFile(join(root, 'sites/vitepress/docs/concepts/content-model.md'), 'utf8'),
    '# Content Model\n',
  )
  assert.equal(
    await readFile(join(vitepressConfigRoot, 'config.mts'), 'utf8'),
    'export default {}\n',
  )
  assert.equal(
    await readFile(join(root, 'sites/starlight/src/content/docs/index.md'), 'utf8'),
    '# Start\n',
  )
  assert.equal(
    await readFile(join(root, 'sites/quartz/content/index.md'), 'utf8'),
    '# Start\n',
  )
})
