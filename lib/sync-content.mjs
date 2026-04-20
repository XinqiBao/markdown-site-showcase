import { cp, mkdir, readdir, rm } from 'node:fs/promises'
import { join } from 'node:path'

export function getSyncTargets(repoRoot) {
  return [
    {
      id: 'vitepress',
      targetDir: join(repoRoot, 'sites/vitepress/docs'),
      preserve: new Set(['.vitepress']),
    },
    {
      id: 'starlight',
      targetDir: join(repoRoot, 'sites/starlight/src/content/docs'),
      preserve: new Set(),
    },
    {
      id: 'quartz',
      targetDir: join(repoRoot, 'sites/quartz/content'),
      preserve: new Set(),
    },
  ]
}

async function emptyGeneratedContent(targetDir, preserve) {
  await mkdir(targetDir, { recursive: true })

  const entries = await readdir(targetDir, { withFileTypes: true })
  const removals = entries
    .filter((entry) => !preserve.has(entry.name))
    .map((entry) => rm(join(targetDir, entry.name), { force: true, recursive: true }))

  await Promise.all(removals)
}

export async function syncCanonicalContent(repoRoot) {
  const sourceDir = join(repoRoot, 'shared-content')

  for (const target of getSyncTargets(repoRoot)) {
    await emptyGeneratedContent(target.targetDir, target.preserve)
    await cp(sourceDir, target.targetDir, { recursive: true })
  }
}
