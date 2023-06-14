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
    ]
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
      announcementBar: {
        id: 'announcementBar',
        content:
          '⚠️ TAPLE is in early development and <a href="/community/DISCLAIMER"> should not be used in production!</a> ⚠️',
        isCloseable: false,
      },
      navbar: {
        logo: {
          alt: 'TAPLE',
          src: 'img/logo-taple.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'technology/what-is-taple',
            position: 'left',
            label: 'Technology',
          },
          {
            type: 'doc',
            docId: 'develop/quickstart',
            position: 'left',
            label: 'Develop',
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Community',
            items: [
              {
                label: 'Disclaimer',
                href: '/community/DISCLAIMER',
              },
              {
                label: 'Repositories',
                href: '/community/repositories',
              },
              {
                label: 'Licenses',
                href: '/community/licenses',
              },
              {
                label: 'Support',
                href: '/community/SUPPORT',
              },
              {
                label: 'Contributing',
                href: '/community/CONTRIBUTING',
              },
              {
                label: 'Security',
                href: '/community/SECURITY',
              },
              {
                label: 'Code of conduct',
                href: '/community/CODE_OF_CONDUCT',
              },
              {
                label: 'European Funding',
                href: '/community/european-funding',
              },
            ]
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: '/community/repositories',
            label: 'GitHub',
            position: 'right',
          },
        ],
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
