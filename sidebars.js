module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'TAPLE Technology',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'DLT & Blockchain',
          id: 'technology/dlt-blockchain',
        },
        {
          type: 'doc',
          label: 'What is TAPLE',
          id: 'technology/what-is-taple',
        },
        {
          type: 'doc',
          label: 'When to use it',
          id: 'technology/when-to-use-taple',
        },
        {
          type: 'doc',
          label: 'Overview',
          id: 'technology/overview',
        },
        {
          type: 'doc',
          label: 'Under the Hood',
          id: "technology/under-the-hood"
        },
        {
          type: 'doc',
          label: 'Glossary',
          id: 'technology/glossary',
        },
        {
          type: 'link',
          label: 'Whitepaper',
          href: 'pathname:///whitepaper/taple-whitepaper.pdf',
        },
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
          id: 'technology/subjects',
        },
        {
          type: 'doc',
          label: 'Schemas',
          id: 'technology/schemas',
        },
        {
          type: 'doc',
          label: 'Events',
          id: 'technology/events',
        },
        {
          type: 'doc',
          label: 'Identity',
          id: 'technology/identity',
        },
        {
          type: 'doc',
          label: 'Governance',
          id: 'technology/governance',
        },
        {
          type: 'doc',
          label: 'Smart Contracts',
          id: 'technology/smart-contracts',
        }
      ],
    },
    {
      type: 'category',
      label: 'Advanced concepts',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'technology/event-life-cycle',
          label: 'Event life cycle',
        },
        {
          type: 'doc',
          id: 'technology/event-evaluation-process',
          label: 'Event evaluation process',
        },
        {
          type: 'doc',
          id: 'technology/event-approval-process',
          label: 'Event approval process',
        },
        {
          type: 'doc',
          id: 'technology/event-validation-process',
          label: 'Event validation process',
        }
      ]
    },
  ],
  tutorialsSidebar: [
    {
      type: 'category',
      label: 'Using TAPLE-Client',
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
          type: 'category',
          label: 'Tutorials',
          collapsed: false,
          collapsible: false,
          items: [
            {
              type: 'category',
              collapsible: true,
              collapsed: false,
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
  ],
  referenceSidebar: [
    {
      type: 'category',
      label: 'Reference',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Architecture',
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
        },            {
          type: 'doc',
          label: 'Database',
          id: 'reference/taple-client-config',
        },
      ]
    },
    {
      type: 'category',
      label: 'Tools',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'TAPLE Client',
          collapsed: true,
          items: [
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
          ]
        },
        {
          type: 'doc',
          label: 'TAPLE Tools',
          id: 'reference/taple-tools',
        },
      ],
    },
    {
      type: 'category',
      label: 'Operational guides',
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
        }
      ]
    },
  ]
};
