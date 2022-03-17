
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/savedao/blog/archive',
    component: ComponentCreator('/savedao/blog/archive','bcf'),
    exact: true
  },
  {
    path: '/savedao/docs',
    component: ComponentCreator('/savedao/docs','cfc'),
    routes: [
      {
        path: '/savedao/docs/become-a-member',
        component: ComponentCreator('/savedao/docs/become-a-member','a09'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/become-an-apprentice',
        component: ComponentCreator('/savedao/docs/become-an-apprentice','bfb'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/champion-a-member',
        component: ComponentCreator('/savedao/docs/champion-a-member','e30'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/client-instructions',
        component: ComponentCreator('/savedao/docs/client-instructions','3ff'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/commission-process',
        component: ComponentCreator('/savedao/docs/commission-process','01a'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/community-forum',
        component: ComponentCreator('/savedao/docs/community-forum','6df'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/community-meetings',
        component: ComponentCreator('/savedao/docs/community-meetings','d7a'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/community-overview',
        component: ComponentCreator('/savedao/docs/community-overview','8e9'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/community-social-media',
        component: ComponentCreator('/savedao/docs/community-social-media','1f6'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/convert-client-submission',
        component: ComponentCreator('/savedao/docs/convert-client-submission','e0e'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/discord-bots',
        component: ComponentCreator('/savedao/docs/discord-bots','74c'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/discord-channels',
        component: ComponentCreator('/savedao/docs/discord-channels','4f8'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/discord-etiquette',
        component: ComponentCreator('/savedao/docs/discord-etiquette','eb7'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/discord-getting-started',
        component: ComponentCreator('/savedao/docs/discord-getting-started','66e'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/discord-navigation-help',
        component: ComponentCreator('/savedao/docs/discord-navigation-help','d80'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/dispute',
        component: ComponentCreator('/savedao/docs/dispute','3ad'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/doc1',
        component: ComponentCreator('/savedao/docs/doc1','069'),
        exact: true
      },
      {
        path: '/savedao/docs/doc2',
        component: ComponentCreator('/savedao/docs/doc2','325'),
        exact: true
      },
      {
        path: '/savedao/docs/glossary',
        component: ComponentCreator('/savedao/docs/glossary','175'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/happy-path',
        component: ComponentCreator('/savedao/docs/happy-path','b7c'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/helping-docs',
        component: ComponentCreator('/savedao/docs/helping-docs','d6b'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/how-does-it-work',
        component: ComponentCreator('/savedao/docs/how-does-it-work','334'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/interacting-with-escrow',
        component: ComponentCreator('/savedao/docs/interacting-with-escrow','524'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/join-a-raid',
        component: ComponentCreator('/savedao/docs/join-a-raid','0e3'),
        exact: true
      },
      {
        path: '/savedao/docs/lead-a-save',
        component: ComponentCreator('/savedao/docs/lead-a-save','cc7'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/learn-about-web3',
        component: ComponentCreator('/savedao/docs/learn-about-web3','a37'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/mdx',
        component: ComponentCreator('/savedao/docs/mdx','680'),
        exact: true
      },
      {
        path: '/savedao/docs/migration-to-xdai',
        component: ComponentCreator('/savedao/docs/migration-to-xdai','9d9'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/overview',
        component: ComponentCreator('/savedao/docs/overview','854'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/overview-code-of-conduct',
        component: ComponentCreator('/savedao/docs/overview-code-of-conduct','aa8'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/overview-molochv2-primer',
        component: ComponentCreator('/savedao/docs/overview-molochv2-primer','d7f'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/overview-roles',
        component: ComponentCreator('/savedao/docs/overview-roles','a11'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/overview-save-guild-shares',
        component: ComponentCreator('/savedao/docs/overview-save-guild-shares','212'),
        exact: true
      },
      {
        path: '/savedao/docs/proposal-types',
        component: ComponentCreator('/savedao/docs/proposal-types','738'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/references',
        component: ComponentCreator('/savedao/docs/references','87d'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/requesting-payment',
        component: ComponentCreator('/savedao/docs/requesting-payment','24d'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/rips',
        component: ComponentCreator('/savedao/docs/rips','a0c'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/shipped',
        component: ComponentCreator('/savedao/docs/shipped','902'),
        exact: true,
        'sidebar': "howSidebar"
      },
      {
        path: '/savedao/docs/summon-a-SAVE-party',
        component: ComponentCreator('/savedao/docs/summon-a-SAVE-party','52f'),
        exact: true,
        'sidebar': "howSidebar"
      }
    ]
  },
  {
    path: '/savedao/',
    component: ComponentCreator('/savedao/','bbf'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
