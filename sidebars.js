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
          label: 'Whitepaper (DRAFT)',
          href: 'pathname:///whitepaper/0.2/taple-whitepaper.pdf',
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
  buildSidebar: [
    {
      type: 'category',
      label: 'Getting started',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Requirements',
          id: 'build/requirements'
        },
        {
          type: 'doc',
          label: 'Quickstart',
          id: 'build/quickstart',
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
              label: 'Wine track',
              link: { type: 'doc', id: 'build/wine-track/use-case-definition' },
              items: [
                {
                  type: 'doc',
                  label: 'Creating governance',
                  id: 'build/wine-track/creating-governance',
                },
                {
                  type: 'doc',
                  label: 'First schema and smart contract',
                  id: 'build/wine-track/first-schema-and-smart-contract',
                },
                {
                  type: 'doc',
                  label: 'Inclusion producer node',
                  id: 'build/wine-track/inclusion-producer-node',
                },
                {
                  type: 'doc',
                  label: 'Updating scheme and smart contract',
                  id: 'build/wine-track/updating-scheme-and-smart-contract',
                },
                {
                  type: 'doc',
                  label: 'External invocations',
                  id: 'build/wine-track/external-invocations',
                },
                {
                  type: 'doc',
                  label: 'Inclusion approving node',
                  id: 'build/wine-track/inclusion-approving-node',
                },
                {
                  type: 'doc',
                  label: 'Transfer to external node',
                  id: 'build/wine-track/transfer-to-external-node',
                },
                {
                  type: 'doc',
                  label: 'Namespace segmentation',
                  id: 'build/wine-track/namespace-segmentation',
                },
                {
                  type: 'doc',
                  label: 'End of life',
                  id: 'build/wine-track/eol',
                },
                {
                  type: 'doc',
                  label: 'Quorum',
                  id: 'build/wine-track/quorum',
                },
              ],
            },
            {
              type: 'category',
              collapsible: true,
              collapsed: true,
              label: 'TAPLE from 0',
              link: { type: 'doc', id: 'build/tutorial-from-0/introduction' },
              items: [
                {
                  type: 'doc',
                  label: 'Running nodes',
                  id: 'build/tutorial-from-0/running-nodes',
                },
                {
                  type: 'doc',
                  label: 'Defining the governance',
                  id: 'build/tutorial-from-0/governance-operations',
                },
                {
                  type: 'doc',
                  label: 'Creating subjects',
                  id: 'build/tutorial-from-0/subject-operations',
                },
                {
                  type: 'doc',
                  label: 'Adding events',
                  id: 'build/tutorial-from-0/event-operations',
                },
                {
                  type: 'doc',
                  label: 'Adding a new node',
                  id: 'build/tutorial-from-0/updating-governance',
                }
              ]
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
      label: 'Operational guides',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Governance configuration',
          id: 'build/operational-guides/governance-configuration',
        },
        {
          type: 'doc',
          label: 'Creating a JSON-Schema',
          id: 'build/operational-guides/creating-a-json-schema',
        }
      ]
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
          label: 'TAPLE Core',
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
          type: 'category',
          label: 'TAPLE Client',
          collapsed: true,
          items: [
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
  ]
};
