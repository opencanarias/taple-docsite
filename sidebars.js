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
          id: 'technology/event-approval-process',
          label: 'Event approval process',
        },
      ]
    },
  ],
  developSidebar: [
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
          id: 'develop/requirements'
        },
        {
          type: 'doc',
          label: 'Quickstart',
          id: 'develop/quickstart',
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
              label: 'TAPLE from 0',
              link: { type: 'doc', id: 'develop/tutorial-from-0/introduction' },
              items: [
                {
                  type: 'doc',
                  label: 'Running nodes',
                  id: 'develop/tutorial-from-0/running-nodes',
                },
                {
                  type: 'doc',
                  label: 'Defining the governance',
                  id: 'develop/tutorial-from-0/governance-operations',
                },
                {
                  type: 'doc',
                  label: 'Creating subjects',
                  id: 'develop/tutorial-from-0/subject-operations',
                },
                {
                  type: 'doc',
                  label: 'Adding events',
                  id: 'develop/tutorial-from-0/event-operations',
                },
                {
                  type: 'doc',
                  label: 'Adding a new node',
                  id: 'develop/tutorial-from-0/updating-governance',
                }
              ]
            },
            {
              type: 'doc',
              label: 'Access control',
              id: 'develop/uc-hotel-access-control',
            },
          ]
        },
        {
          type: 'doc',
          label: 'Issues and Workarounds',
          id: 'develop/issues-and-workarounds',
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
          id: 'develop/operational-guides/governance-configuration',
        },
        {
          type: 'doc',
          label: 'Creating a JSON-Schema',
          id: 'develop/operational-guides/creating-a-json-schema',
        }
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      className: 'sidebar-section',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'TAPLE Core',
          collapsed: true,
          items: [
            {
              type: 'doc',
              label: 'Description',
              id: 'develop/taple-core',
            },
            {
              type: 'link',
              label: 'Documentation',
              href: 'pathname:///crate-doc/next/core/',
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
              id: 'develop/taple-client-config',
            },
            {
              type: 'doc',
              label: 'Backups',
              id: 'develop/backups',
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
          id: 'develop/taple-tools',
        },
      ],
    },
  ],
};
