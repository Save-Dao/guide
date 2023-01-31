
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','58a'),
    routes: [
      {
        path: '/docs/become-a-member',
        component: ComponentCreator('/docs/become-a-member','8e5'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/become-a-sidekick',
        component: ComponentCreator('/docs/become-a-sidekick','b93'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/champion-a-member',
        component: ComponentCreator('/docs/champion-a-member','a6b'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/client-instructions',
        component: ComponentCreator('/docs/client-instructions','ca9'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/commission-process',
        component: ComponentCreator('/docs/commission-process','42f'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/community-forum',
        component: ComponentCreator('/docs/community-forum','96f'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/community-meetings',
        component: ComponentCreator('/docs/community-meetings','729'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/community-overview',
        component: ComponentCreator('/docs/community-overview','23e'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/community-social-media',
        component: ComponentCreator('/docs/community-social-media','602'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/convert-client-submission',
        component: ComponentCreator('/docs/convert-client-submission','6c8'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/discord-bots',
        component: ComponentCreator('/docs/discord-bots','33b'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/discord-channels',
        component: ComponentCreator('/docs/discord-channels','e66'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/discord-etiquette',
        component: ComponentCreator('/docs/discord-etiquette','e3b'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/discord-getting-started',
        component: ComponentCreator('/docs/discord-getting-started','1a8'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/discord-navigation-help',
        component: ComponentCreator('/docs/discord-navigation-help','195'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/dispute',
        component: ComponentCreator('/docs/dispute','dc8'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/doc1',
        component: ComponentCreator('/docs/doc1','392'),
        exact: true
      },
      {
        path: '/docs/doc2',
        component: ComponentCreator('/docs/doc2','fd3'),
        exact: true
      },
      {
        path: '/docs/glossary',
        component: ComponentCreator('/docs/glossary','241'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/happy-path',
        component: ComponentCreator('/docs/happy-path','922'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/helping-docs',
        component: ComponentCreator('/docs/helping-docs','9d7'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/how-does-it-work',
        component: ComponentCreator('/docs/how-does-it-work','b93'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/interacting-with-escrow',
        component: ComponentCreator('/docs/interacting-with-escrow','27a'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/join-a-campaign',
        component: ComponentCreator('/docs/join-a-campaign','e33'),
        exact: true
      },
      {
        path: '/docs/lead-a-save',
        component: ComponentCreator('/docs/lead-a-save','e76'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/learn-about-web3',
        component: ComponentCreator('/docs/learn-about-web3','e36'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/mdx',
        component: ComponentCreator('/docs/mdx','955'),
        exact: true
      },
      {
        path: '/docs/migration-to-xdai',
        component: ComponentCreator('/docs/migration-to-xdai','f5c'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/overview',
        component: ComponentCreator('/docs/overview','cd5'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/overview-code-of-conduct',
        component: ComponentCreator('/docs/overview-code-of-conduct','bb2'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/overview-covenant',
        component: ComponentCreator('/docs/overview-covenant','4da'),
        exact: true
      },
      {
        path: '/docs/overview-molochv3-primer',
        component: ComponentCreator('/docs/overview-molochv3-primer','661'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/overview-roles',
        component: ComponentCreator('/docs/overview-roles','1b6'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/overview-save-guild-shares',
        component: ComponentCreator('/docs/overview-save-guild-shares','a29'),
        exact: true
      },
      {
        path: '/docs/proposal-types',
        component: ComponentCreator('/docs/proposal-types','6c7'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/references',
        component: ComponentCreator('/docs/references','ea6'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/requesting-payment',
        component: ComponentCreator('/docs/requesting-payment','8e5'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/rips',
        component: ComponentCreator('/docs/rips','04d'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/shipped',
        component: ComponentCreator('/docs/shipped','1ce'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/docs/summon-a-SAVE-party',
        component: ComponentCreator('/docs/summon-a-SAVE-party','528'),
        exact: true,
        'sidebar': "howSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
