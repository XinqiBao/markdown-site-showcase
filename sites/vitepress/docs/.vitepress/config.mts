import { defineConfig } from 'vitepress'
import { loadSiteConfig, toVitePressSidebar } from '../../../../lib/content-model.mjs'

const siteConfig = loadSiteConfig()

export default defineConfig({
  title: siteConfig.repoTitle,
  description: siteConfig.repoDescription,
  base: siteConfig.getDemoBasePath('vitepress'),
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    search: { provider: 'local' },
    nav: siteConfig.topNav,
    sidebar: toVitePressSidebar(siteConfig),
    socialLinks: [{ icon: 'github', link: 'https://github.com/XinqiBao/markdown-site-showcase' }]
  }
})
