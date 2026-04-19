import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const repoRoot = new URL('../', import.meta.url)

test('Quartz build script reads the canonical content tree directly', async () => {
  const packageJsonPath = new URL('sites/quartz/package.json', repoRoot)
  const packageJson = JSON.parse(await readFile(fileURLToPath(packageJsonPath), 'utf8'))

  assert.equal(packageJson.scripts.build, 'npx quartz build -d ../../content')
  assert.equal(packageJson.scripts.dev, 'npx quartz build --serve -d ../../content')
})
