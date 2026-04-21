const { themes: prismThemes } = require('prism-react-renderer')

const baseUrl = '/markdown-site-showcase/docusaurus/'

module.exports = {
  title: 'Markdown Site Showcase',
  tagline: 'One shared Markdown source, multiple reading models',
  url: 'https://xinqibao.github.io',
  baseUrl,
  organizationName: 'XinqiBao',
  projectName: 'markdown-site-showcase',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  trailingSlash: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.cjs',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Docusaurus',
      items: [
        { label: 'Start Here', to: '/' },
        { label: 'Concepts', to: '/concepts/' },
        { label: 'Workflows', to: '/workflows/' },
        { label: 'Architecture', to: '/architecture/' },
        { label: 'Reference', to: '/reference/' },
        {
          href: 'https://github.com/XinqiBao/markdown-site-showcase',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
}
