module.exports = {
  discoverSidebar: [
    {
      type: 'category',
      label: 'Overview',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Introduction',
          id: 'discover/introduction',
        },
        {
          type: 'doc',
          label: 'Fundamentals',
          id: 'discover/taple',
        },
        {
          type: 'doc',
          label: 'Components',
          id: 'discover/components',
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
          id: 'reference/glossary',
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
  ],
  learnSidebar: [
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
          label: 'Governance configuration',
          id: 'reference/operational-guides/governance-configuration',
        },
        {
          type: 'doc',
          label: 'Creating a JSON-Schema',
          id: 'reference/operational-guides/creating-a-json-schema',
        },
      ]
    },
    {

      type: 'category',
      label: 'Advanced',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          collapsible: true,
          collapsed: false,
          label: 'Event life cycle',
          link: { type: 'doc', id: 'discover/event-life-cycle' },
          items: [
            {
              type: 'doc',
              id: 'discover/event-evaluation-process',
              label: 'Event evaluation process',
            },
            {
              type: 'doc',
              id: 'discover/event-approval-process',
              label: 'Event approval process',
            },
            {
              type: 'doc',
              id: 'discover/event-validation-process',
              label: 'Event validation process',
            }
          ]
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
          id: 'tutorials/first-steps'
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
              link: { type: 'doc', id: 'tutorials/wine-track/use-case-definition' },
              items: [
                {
                  type: 'doc',
                  label: 'Running a node',
                  id: 'tutorials/wine-track/running-node',
                },
                {
                  type: 'doc',
                  label: 'Creating a governance',
                  id: 'tutorials/wine-track/creating-governance',
                },
                {
                  type: 'doc',
                  label: 'Creating an event',
                  id: 'tutorials/wine-track/creating-event',
                },
                {
                  type: 'doc',
                  label: 'Adding a schema',
                  id: 'tutorials/wine-track/adding-schema',
                },
                {
                  type: 'doc',
                  label: 'Adding participants',
                  id: 'tutorials/wine-track/adding-participants',
                },
                {
                  type: 'doc',
                  label: 'Creating a subject',
                  id: 'tutorials/wine-track/creating-subject',
                },
                {
                  type: 'doc',
                  label: 'External invocations',
                  id: 'tutorials/wine-track/external-invocations',
                },
                {
                  type: 'doc',
                  label: 'Approvals',
                  id: 'tutorials/wine-track/approvals',
                },
                {
                  type: 'doc',
                  label: 'Transfers',
                  id: 'tutorials/wine-track/transfers',
                },
                {
                  type: 'doc',
                  label: 'Segmentation',
                  id: 'tutorials/wine-track/segmentation',
                },
                {
                  type: 'doc',
                  label: 'Changing policies',
                  id: 'tutorials/wine-track/changing-policies',
                },
                {
                  type: 'doc',
                  label: 'End of life',
                  id: 'tutorials/wine-track/eol',
                },
              ],
            },
            {
              type: 'doc',
              label: 'Access control',
              id: 'tutorials/uc-hotel-access-control',
            },
          ]
        },
        {
          type: 'doc',
          label: 'Issues and Workarounds',
          id: 'tutorials/issues-and-workarounds',
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
          id: 'reference/operational-guides/creating-a-json-schema',
        },
        {
          type: 'doc',
          label: 'Programming smart contracts',
          id: 'reference/operational-guides/programming-smart-contracts',
        },
      ]
    },
  ],
};
