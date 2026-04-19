import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

import { loadSiteConfig } from '../lib/content-model.mjs'
import { renderLandingPage } from '../lib/landing-page.mjs'

const repoRoot = process.cwd()
const siteConfig = await loadSiteConfig()

await mkdir(join(repoRoot, 'dist'), { recursive: true })
await writeFile(
  join(repoRoot, 'dist/index.html'),
  renderLandingPage({
    repoName: siteConfig.repoName,
    demos: siteConfig.demos,
  }),
)
