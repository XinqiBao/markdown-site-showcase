import { sharedSiteConfig } from '../config/site-config.mjs'

function createRepoBasePath(repoName) {
  return `/${repoName}/`
}

function createDemoBasePath(repoName, demoId) {
  return `/${repoName}/${demoId}/`
}

export function loadSiteConfig() {
  const repoBasePath = createRepoBasePath(sharedSiteConfig.repoName)

  return {
    ...sharedSiteConfig,
    repoBasePath,
    demos: sharedSiteConfig.demos.map((demo) => ({
      ...demo,
      href: createDemoBasePath(sharedSiteConfig.repoName, demo.id),
    })),
    getRepoBasePath() {
      return repoBasePath
    },
    getDemoBasePath(demoId) {
      return createDemoBasePath(sharedSiteConfig.repoName, demoId)
    },
  }
}

export function toVitePressSidebar(siteConfig) {
  return siteConfig.sections.map((section) => ({
    text: section.text,
    items: section.items.map((item) => ({
      text: item.text,
      link: item.link,
    })),
  }))
}

function linkToSlug(link) {
  return link.replace(/^\/|\/$/g, '')
}

export function toStarlightSidebar(siteConfig) {
  return siteConfig.sections.map((section) => ({
    label: section.text,
    items: section.items.map((item) =>
      item.link === '/'
        ? { label: item.text, link: '/' }
        : { label: item.text, slug: linkToSlug(item.link) },
    ),
  }))
}
