module.exports = {
  discoverSidebar: [
    {
      type: 'category',
      label: 'Discover',
      className: 'sidebar-section',
      link: {type: 'doc', id: 'discover/index'},
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'TAPLE',
          id: 'discover/index',
        },
        {
          type: 'doc',
          label: 'Use cases',
          id: 'discover/use-cases',
        },
        {
          type: 'doc',
          label: 'Overview',
          id: 'discover/overview',
        },
        {
          type: 'category',
          label: 'Key concepts',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'discover/key-concepts'},
          items: [
            {
              type: 'doc',
              label: 'Subjects',
              id: 'discover/subjects',
            },
            {
              type: 'doc',
              label: 'Schemas',
              id: 'discover/schemas',
            },
            {
              type: 'doc',
              label: 'Events',
              id: 'discover/events',
            },
            {
              type: 'doc',
              label: 'Identity',
              id: 'discover/identity',
            },
            {
              type: 'doc',
              label: 'Roles',
              id: 'discover/roles',
            },
            {
              type: 'doc',
              label: 'Smart Contracts',
              id: 'discover/smart-contracts',
            },
            {
              type: 'doc',
              label: 'Governance',
              id: 'discover/governance',
            }
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'discover/advanced'},
          items: [
            {
              type: 'doc',
              id: 'discover/event-evaluation-process',
              label: 'Evaluation process',
            },
            {
              type: 'doc',
              id: 'discover/event-approval-process',
              label: 'Approval process',
            },
            {
              type: 'doc',
              id: 'discover/event-validation-process',
              label: 'Validation process',
            }
          ]
        },
        {
          type: 'link',
          label: 'Whitepaper',
          href: 'pathname:///whitepaper/taple-whitepaper.pdf',
        },
        {
          type: 'doc',
          label: 'What\'s new',
          id: 'discover/whats-new',
        },
        {
          type: 'doc',
          label: 'Under the Hood',
          id: "discover/under-the-hood"
        },
        {
          type: 'doc',
          label: 'Glossary',
          id: 'discover/glossary',
        }
      ]
    }
  ],
  learnSidebar: [
    {
      type: 'category',
      label: 'Learn',
      className: 'sidebar-section',
      link: {type: 'doc', id: 'learn/index'},
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Core library',
          link: {type: 'doc', id: 'learn/core-architecture'},
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Arquitecture',
              id: 'learn/core-architecture',
            },
            {
              type: 'link',
              label: 'API',
              href: 'pathname:///crate-doc/next/taple_core/',
            },
          ]
        },
        {
          type: 'doc',
          label: 'JSON Schema',
          id: 'learn/json-schema',
        },
        {
          type: 'category',
          label: 'Smart contracts',
          link: {type: 'doc', id: 'learn/smart-contracts'},
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Introduction',
              id: 'learn/smart-contracts',
            },
            {
              type: 'doc',
              label: 'Programming smart contracts',
              id: 'learn/smart-contracts-programming',
            },
          ]
        },
        {
          type: 'category',
          label: 'Governance',
          collapsible: true,
          collapsed: true,
          link: {type: 'doc', id: 'learn/governance-structure'},
          items: [
            {
              type: 'doc',
              label: 'Structure',
              id: 'learn/governance-structure',
            },
            {
              type: 'doc',
              label: 'Schema and contract',
              id: 'learn/governance-schema-and-contract',
            },
          ]
        },
        {
          type: 'category',
          label: 'TAPLE Client',
          collapsible: true,
          link: {type: 'doc', id: 'learn/taple-client'},
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Description',
              id: 'learn/taple-client',
            },
            {
              type: 'doc',
              label: 'Basic usage',
              id: 'learn/client-usage',
            },
            {
              type: 'doc',
              label: 'Configuration',
              id: 'learn/client-config',
            },
            {
              type: "category",
              label: "REST API",
              collapsed: true,
              items: require("./docs/api-rest/sidebar.js"),
            },
            {
              type: 'doc',
              label: 'Tools',
              id: 'learn/client-tools',
            },
          ],
        },
      ]
    }
  ],
  buildSidebar: [
    {
      type: 'category',
      label: 'Build',
      className: 'sidebar-section',
      link: {type: 'doc', id: 'build/index'},
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Using TAPLE Client',
          link: {type: 'doc', id: 'build/taple-client'},
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'doc',
              label: 'First steps',
              id: 'build/taple-client'
            },
            {
              type: 'category',
              collapsible: true,
              collapsed: true,
              label: 'Minimal network',
              items: [
                {
                  type: 'doc',
                  label: 'Introduction',
                  id: 'build/minimal-network/introduction',
                },
                {
                  type: 'doc',
                  label: 'Running the first node',
                  id: 'build/minimal-network/running-the-first-node',
                },
                {
                  type: 'doc',
                  label: 'Creating the governance',
                  id: 'build/minimal-network/creating-governance',
                },
                {
                  type: 'doc',
                  label: 'Adding a second member',
                  id: 'build/minimal-network/adding-a-second-member',
                },
                {
                  type: 'doc',
                  label: 'Adding a third member',
                  id: 'build/minimal-network/adding-a-third-member',
                },
                {
                  type: 'doc',
                  label: 'Next steps',
                  id: 'build/minimal-network/next-steps',
                },
              ]
            },
            {
              type: 'category',
              collapsible: true,
              collapsed: true,
              label: 'Assets traceability',
              items: [
                {
                  type: 'doc',
                  label: 'Use case description',
                  id: 'build/assets-traceability/use-case-definition',
                },
                {
                  type: 'doc',
                  label: 'Running a node',
                  id: 'build/assets-traceability/running-node',
                },
                {
                  type: 'doc',
                  label: 'Creating a governance',
                  id: 'build/assets-traceability/creating-governance',
                },
                {
                  type: 'doc',
                  label: 'Creating an event',
                  id: 'build/assets-traceability/creating-event',
                },
                {
                  type: 'doc',
                  label: 'Adding a schema',
                  id: 'build/assets-traceability/adding-schema',
                },
                {
                  type: 'doc',
                  label: 'Adding participants',
                  id: 'build/assets-traceability/adding-participants',
                },
                {
                  type: 'doc',
                  label: 'Creating a subject',
                  id: 'build/assets-traceability/creating-subject',
                },
                {
                  type: 'doc',
                  label: 'External invocations',
                  id: 'build/assets-traceability/external-invocations',
                },
                {
                  type: 'doc',
                  label: 'Approvals',
                  id: 'build/assets-traceability/approvals',
                },
                {
                  type: 'doc',
                  label: 'Transfers',
                  id: 'build/assets-traceability/transfers',
                },
                {
                  type: 'doc',
                  label: 'Segmentation',
                  id: 'build/assets-traceability/segmentation',
                },
                {
                  type: 'doc',
                  label: 'Changing policies',
                  id: 'build/assets-traceability/changing-policies',
                },
                {
                  type: 'doc',
                  label: 'End of life',
                  id: 'build/assets-traceability/eol',
                },
              ],
            },
            {
              type: 'category',
              label: 'Access control',
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  label: 'Use case description',
                  id: 'build/access-control/use-case',
                },
                {
                  type: 'doc',
                  label: 'Governance definition',
                  id: 'build/access-control/governance-definition',
                },
                {
                  type: 'doc',
                  label: 'Setting up the network',
                  id: 'build/access-control/setting-network',
                },
                {
                  type: 'doc',
                  label: 'Interactuar con la red',
                  id: 'build/access-control/interactuar-red',
                }
              ],
            },
            {
              type: 'doc',
              label: 'Issues and Workarounds',
              id: 'build/issues-and-workarounds',
            },
          ]
        },
      ]
    }
  ],
};
