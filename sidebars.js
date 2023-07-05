module.exports = {
  discoverSidebar: [
    {
      type: 'category',
      label: 'Basics',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Background',
          id: 'discover/background',
        },
        {
          type: 'doc',
          label: 'TAPLE',
          id: 'discover/taple',
        },
        {
          type: 'doc',
          label: 'Overview',
          id: 'discover/overview',
        },
        {
          type: 'doc',
          label: 'Use cases',
          id: 'discover/use-cases',
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
          label: 'Glossary',
          id: 'discover/glossary',
        }
      ],
    },
    {
      type: 'category',
      label: 'Key concepts',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
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
          label: 'Governance',
          id: 'discover/governance',
        },
        {
          type: 'doc',
          label: 'Smart Contracts',
          id: 'discover/smart-contracts',
        }
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
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
  ],
  referenceSidebar: [
    {
      type: 'category',
      label: 'Architecture',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Components',
          id: 'reference/architecture',
        },
        {
          type: 'category',
          label: 'Core library',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Description',
              id: 'reference/taple-core',
            },
            {
              type: 'link',
              label: 'Documentation',
              href: 'pathname:///crate-doc/next/taple_core/',
            },
          ]
        },
        {
          type: 'doc',
          label: 'Network',
          id: 'reference/taple-client-config',
        }, {
          type: 'doc',
          label: 'Database',
          id: 'reference/taple-client-config',
        },
        {
          type: 'doc',
          label: 'Under the Hood',
          id: "discover/under-the-hood"
        },
      ]
    },
    {
      type: 'category',
      label: 'Governance',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Structure',
          id: 'reference/governance-structure',
        },
        {
          type: 'doc',
          label: 'Schema and contract',
          id: 'reference/governance-schema-and-contract',
        },
      ]
    },
    {
      type: 'category',
      label: 'Other resources',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Creating a JSON-Schema',
          id: 'reference/creating-a-json-schema',
        },
      ]
    },
  ],
  buildSidebar: [
    {
      type: 'category',
      label: 'TAPLE Client',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'First steps',
          id: 'build/first-steps'
        },
        {
          type: 'doc',
          label: 'Basic usage',
          id: 'reference/taple-client-config',
        },
        {
          type: 'doc',
          label: 'Configuration',
          id: 'reference/taple-client-config',
        },
        {
          type: 'doc',
          label: 'Backups',
          id: 'reference/backups',
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
          id: 'reference/taple-tools',
        },
        {
          type: 'category',
          label: 'Tutorials',
          collapsed: false,
          collapsible: false,
          items: [
            {
              type: 'category',
              collapsible: true,
              collapsed: true,
              label: 'Asset traceability',
              link: { type: 'doc', id: 'build/wine-track/use-case-definition' },
              items: [
                {
                  type: 'doc',
                  label: 'Running a node',
                  id: 'build/wine-track/running-node',
                },
                {
                  type: 'doc',
                  label: 'Creating a governance',
                  id: 'build/wine-track/creating-governance',
                },
                {
                  type: 'doc',
                  label: 'Creating an event',
                  id: 'build/wine-track/creating-event',
                },
                {
                  type: 'doc',
                  label: 'Adding a schema',
                  id: 'build/wine-track/adding-schema',
                },
                {
                  type: 'doc',
                  label: 'Adding participants',
                  id: 'build/wine-track/adding-participants',
                },
                {
                  type: 'doc',
                  label: 'Creating a subject',
                  id: 'build/wine-track/creating-subject',
                },
                {
                  type: 'doc',
                  label: 'External invocations',
                  id: 'build/wine-track/external-invocations',
                },
                {
                  type: 'doc',
                  label: 'Approvals',
                  id: 'build/wine-track/approvals',
                },
                {
                  type: 'doc',
                  label: 'Transfers',
                  id: 'build/wine-track/transfers',
                },
                {
                  type: 'doc',
                  label: 'Segmentation',
                  id: 'build/wine-track/segmentation',
                },
                {
                  type: 'doc',
                  label: 'Changing policies',
                  id: 'build/wine-track/changing-policies',
                },
                {
                  type: 'doc',
                  label: 'End of life',
                  id: 'build/wine-track/eol',
                },
              ],
            },
            {
              type: 'doc',
              label: 'Access control',
              id: 'build/uc-hotel-access-control',
            },
          ]
        },
        {
          type: 'doc',
          label: 'Issues and Workarounds',
          id: 'build/issues-and-workarounds',
        },
      ],
    },
    {
      type: 'category',
      label: 'Smart contracts',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'SDK',
          id: 'reference/creating-a-json-schema',
        },
        {
          type: 'doc',
          label: 'Programming smart contracts',
          id: 'reference/programming-smart-contracts',
        },
      ]
    },
  ],
};
