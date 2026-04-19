import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import { loadSiteConfig, toStarlightSidebar } from '../../lib/content-model.mjs'

const siteConfig = loadSiteConfig()

export default defineConfig({
  site: siteConfig.siteUrl,
  base: siteConfig.getDemoBasePath('starlight').replace(/\/$/, ''),
  integrations: [
    starlight({
      title: siteConfig.repoTitle,
      description: siteConfig.repoDescription,
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/XinqiBao/markdown-site-showcase'
        }
      ],
      sidebar: toStarlightSidebar(siteConfig)
    })
  ]
})
