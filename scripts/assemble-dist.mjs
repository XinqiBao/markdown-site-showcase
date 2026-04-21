import { cp, mkdir, rm } from 'node:fs/promises'
import { join } from 'node:path'

const repoRoot = process.cwd()

const copies = [
  {
    source: join(repoRoot, 'sites/vitepress/docs/.vitepress/dist'),
    target: join(repoRoot, 'dist/vitepress'),
  },
  {
    source: join(repoRoot, 'sites/starlight/dist'),
    target: join(repoRoot, 'dist/starlight'),
  },
  {
    source: join(repoRoot, 'sites/docusaurus/build'),
    target: join(repoRoot, 'dist/docusaurus'),
  },
  {
    source: join(repoRoot, 'sites/quartz/public'),
    target: join(repoRoot, 'dist/quartz'),
  },
]

await mkdir(join(repoRoot, 'dist'), { recursive: true })

for (const copySpec of copies) {
  await rm(copySpec.target, { force: true, recursive: true })
  await cp(copySpec.source, copySpec.target, { recursive: true })
}
