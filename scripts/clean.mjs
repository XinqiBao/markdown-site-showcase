import { rm } from 'node:fs/promises'
import { join } from 'node:path'

const repoRoot = process.cwd()

const paths = [
  'dist',
  'sites/starlight/dist',
  'sites/quartz/public',
  'sites/vitepress/docs/.vitepress/dist',
]

await Promise.all(
  paths.map((path) => rm(join(repoRoot, path), { force: true, recursive: true })),
)
