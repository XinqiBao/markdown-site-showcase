function rewriteMarkdownHref(href) {
  const [path, hash] = href.split('#')

  if (!path.endsWith('.md')) {
    return href
  }

  let rewritten = path.replace(/index\.md$/, '')
  if (rewritten === path) {
    rewritten = `${path.slice(0, -3)}/`
  }

  if (hash) {
    return `${rewritten}#${hash}`
  }

  return rewritten
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData('layout', 'layout.njk')
  eleventyConfig.addPassthroughCopy({ assets: 'assets' })
  eleventyConfig.addTransform('rewrite-markdown-links', function (content, outputPath) {
    if (!outputPath || !outputPath.endsWith('.html')) {
      return content
    }

    return content.replace(/href="([^"]+\.md(?:#[^"]*)?)"/g, (_match, href) => {
      return `href="${rewriteMarkdownHref(href)}"`
    })
  })

  return {
    pathPrefix: '/markdown-site-showcase/eleventy/',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      includes: '_includes',
      layouts: '_includes',
      data: '_data',
      output: '_site',
    },
  }
}
