
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/guide/blog/archive',
    component: ComponentCreator('/guide/blog/archive','c11'),
    exact: true
  },
  {
    path: '/guide/docs',
    component: ComponentCreator('/guide/docs','3b9'),
    routes: [
      {
        path: '/guide/docs/become-a-member',
        component: ComponentCreator('/guide/docs/become-a-member','21e'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/become-an-apprentice',
        component: ComponentCreator('/guide/docs/become-an-apprentice','9fe'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/champion-a-member',
        component: ComponentCreator('/guide/docs/champion-a-member','0fe'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/client-instructions',
        component: ComponentCreator('/guide/docs/client-instructions','b66'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/commission-process',
        component: ComponentCreator('/guide/docs/commission-process','6b8'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/community-forum',
        component: ComponentCreator('/guide/docs/community-forum','6fe'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/community-meetings',
        component: ComponentCreator('/guide/docs/community-meetings','648'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/community-overview',
        component: ComponentCreator('/guide/docs/community-overview','6b1'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/community-social-media',
        component: ComponentCreator('/guide/docs/community-social-media','258'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/convert-client-submission',
        component: ComponentCreator('/guide/docs/convert-client-submission','472'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/discord-bots',
        component: ComponentCreator('/guide/docs/discord-bots','cc1'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/discord-channels',
        component: ComponentCreator('/guide/docs/discord-channels','330'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/discord-etiquette',
        component: ComponentCreator('/guide/docs/discord-etiquette','aff'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/discord-getting-started',
        component: ComponentCreator('/guide/docs/discord-getting-started','daf'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/discord-navigation-help',
        component: ComponentCreator('/guide/docs/discord-navigation-help','61f'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/dispute',
        component: ComponentCreator('/guide/docs/dispute','cf0'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/doc1',
        component: ComponentCreator('/guide/docs/doc1','ac4'),
        exact: true
      },
      {
        path: '/guide/docs/doc2',
        component: ComponentCreator('/guide/docs/doc2','dc5'),
        exact: true
      },
      {
        path: '/guide/docs/glossary',
        component: ComponentCreator('/guide/docs/glossary','c00'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/happy-path',
        component: ComponentCreator('/guide/docs/happy-path','efd'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/helping-docs',
        component: ComponentCreator('/guide/docs/helping-docs','bd4'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/how-does-it-work',
        component: ComponentCreator('/guide/docs/how-does-it-work','e85'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/interacting-with-escrow',
        component: ComponentCreator('/guide/docs/interacting-with-escrow','59b'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/join-a-raid',
        component: ComponentCreator('/guide/docs/join-a-raid','0de'),
        exact: true
      },
      {
        path: '/guide/docs/lead-a-save',
        component: ComponentCreator('/guide/docs/lead-a-save','b9d'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/learn-about-web3',
        component: ComponentCreator('/guide/docs/learn-about-web3','b33'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/mdx',
        component: ComponentCreator('/guide/docs/mdx','d15'),
        exact: true
      },
      {
        path: '/guide/docs/migration-to-xdai',
        component: ComponentCreator('/guide/docs/migration-to-xdai','68f'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/overview',
        component: ComponentCreator('/guide/docs/overview','5df'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/overview-code-of-conduct',
        component: ComponentCreator('/guide/docs/overview-code-of-conduct','fdd'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/overview-molochv3-primer',
        component: ComponentCreator('/guide/docs/overview-molochv3-primer','aa8'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/overview-roles',
        component: ComponentCreator('/guide/docs/overview-roles','93b'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/overview-save-guild-shares',
        component: ComponentCreator('/guide/docs/overview-save-guild-shares','e74'),
        exact: true
      },
      {
        path: '/guide/docs/proposal-types',
        component: ComponentCreator('/guide/docs/proposal-types','c08'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/references',
        component: ComponentCreator('/guide/docs/references','66f'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/requesting-payment',
        component: ComponentCreator('/guide/docs/requesting-payment','c0f'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/rips',
        component: ComponentCreator('/guide/docs/rips','5f8'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/shipped',
        component: ComponentCreator('/guide/docs/shipped','16f'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/guide/docs/summon-a-SAVE-party',
        component: ComponentCreator('/guide/docs/summon-a-SAVE-party','2d9'),
        exact: true,
        'sidebar': "howSidebar"
      }
    ]
  },
  {
    path: '/guide/',
    component: ComponentCreator('/guide/','131'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
