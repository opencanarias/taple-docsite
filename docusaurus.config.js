const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'TAPLE',
  tagline: 'Tracking (Autonomous) of Provenance and Lifecycle Events',
  url: 'https://taple.es',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'opencanarias', // Usually your GitHub org/user name.
  projectName: 'taple', // Usually your repo name.
  customFields: {
  },
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: ({
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English',
      }
    },
  }),

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          includeCurrentVersion: true,
          docLayoutComponent: "@theme/DocPage",
          // Derived from docusaurus-theme-openapi-docs
          docItemComponent: "@theme/ApiItem",
          lastVersion: '0.1',
          versions: {
            current: {
              label: 'Next',
              banner: 'unreleased'
            },
            0.1: {
              banner: 'none'
            }
          },
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "apiDocs",
        docsPluginId: "classic",
        config: {
          taple: {
            specPath: "static/openapi/next/taple.openapi.json", // Path to designated spec file
            outputDir: "docs/api-rest", // Output directory for generated .mdx docs
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            },
          }
        }
      },
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
        showLastUpdateTime: true,
      }),
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/discover/background',
            from: ['/technology', '/docs/technology/what-is-taple', '/docs', '/discover']
          },
          {
            to: '/docs/build/first-steps',
            from: ['/build', '/tutorials', '/docs/develop', '/develop']
          },
          {
            to: '/docs/reference/architecture',
            from: ['/reference', '/learn', ]
          },
          {
            to: '/community/DISCLAIMER',
            from: ['/community']
          }
        ],
      },
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themes: [
    "docusaurus-theme-openapi-docs", // Allows use of @theme/ApiItem and other components
    "@docusaurus/theme-mermaid",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      /*announcementBar: {
        id: 'announcementBar',
        content:
          '⚠️ TAPLE is in early development and <a href="/community/DISCLAIMER"> should not be used in production!</a> ⚠️',
        isCloseable: false,
      },*/
      navbar: {
        logo: {
          alt: 'TAPLE',
          src: 'img/logo-taple.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'discover/background',
            position: 'left',
            label: 'Discover',
          },
          {
            type: 'doc',
            docId: 'reference/architecture',
            position: 'left',
            label: 'Learn',
          },
          {
            type: 'doc',
            docId: 'build/first-steps',
            position: 'left',
            label: 'Build',
          },
          {
            to: '/community/CONTRIBUTING',
            label: 'Community',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/search?q=topic%3Ataple+org%3Aopencanarias++fork%3Atrue+archived%3Afalse&type=repositories',
            //label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Open Canarias',
          src: 'img/logo-open-footer.png',
          href: 'https://www.opencanarias.com/en/',
          width: 125,
        },
        copyright: `Copyright © ${new Date().getFullYear()} <a target="_blank" href="https://www.opencanarias.com/en/">Open Canarias S.L.</a>. TAPLE is a trademark registered by <a target="_blank" href="https://www.opencanarias.com/en/">Open Canarias S.L.</a>. <a target="_blank" href="https://www.opencanarias.com/en/legal/#legal-warning">Legal Warning</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
