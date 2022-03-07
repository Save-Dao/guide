
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/savedao/',
  component: ComponentCreator('/savedao/'),
  exact: true,
  
},
{
  path: '/savedao/docs/:route',
  component: ComponentCreator('/savedao/docs/:route'),
  
  routes: [
{
  path: '/savedao/docs/become-a-member',
  component: ComponentCreator('/savedao/docs/become-a-member'),
  exact: true,
  
},
{
  path: '/savedao/docs/become-an-apprentice',
  component: ComponentCreator('/savedao/docs/become-an-apprentice'),
  exact: true,
  
},
{
  path: '/savedao/docs/champion-a-member',
  component: ComponentCreator('/savedao/docs/champion-a-member'),
  exact: true,
  
},
{
  path: '/savedao/docs/client-instructions',
  component: ComponentCreator('/savedao/docs/client-instructions'),
  exact: true,
  
},
{
  path: '/savedao/docs/commission-process',
  component: ComponentCreator('/savedao/docs/commission-process'),
  exact: true,
  
},
{
  path: '/savedao/docs/community-forum',
  component: ComponentCreator('/savedao/docs/community-forum'),
  exact: true,
  
},
{
  path: '/savedao/docs/community-meetings',
  component: ComponentCreator('/savedao/docs/community-meetings'),
  exact: true,
  
},
{
  path: '/savedao/docs/community-overview',
  component: ComponentCreator('/savedao/docs/community-overview'),
  exact: true,
  
},
{
  path: '/savedao/docs/community-social-media',
  component: ComponentCreator('/savedao/docs/community-social-media'),
  exact: true,
  
},
{
  path: '/savedao/docs/convert-client-submission',
  component: ComponentCreator('/savedao/docs/convert-client-submission'),
  exact: true,
  
},
{
  path: '/savedao/docs/discord-bots',
  component: ComponentCreator('/savedao/docs/discord-bots'),
  exact: true,
  
},
{
  path: '/savedao/docs/discord-channels',
  component: ComponentCreator('/savedao/docs/discord-channels'),
  exact: true,
  
},
{
  path: '/savedao/docs/discord-etiquette',
  component: ComponentCreator('/savedao/docs/discord-etiquette'),
  exact: true,
  
},
{
  path: '/savedao/docs/discord-getting-started',
  component: ComponentCreator('/savedao/docs/discord-getting-started'),
  exact: true,
  
},
{
  path: '/savedao/docs/discord-navigation-help',
  component: ComponentCreator('/savedao/docs/discord-navigation-help'),
  exact: true,
  
},
{
  path: '/savedao/docs/dispute',
  component: ComponentCreator('/savedao/docs/dispute'),
  exact: true,
  
},
{
  path: '/savedao/docs/doc1',
  component: ComponentCreator('/savedao/docs/doc1'),
  exact: true,
  
},
{
  path: '/savedao/docs/doc2',
  component: ComponentCreator('/savedao/docs/doc2'),
  exact: true,
  
},
{
  path: '/savedao/docs/glossary',
  component: ComponentCreator('/savedao/docs/glossary'),
  exact: true,
  
},
{
  path: '/savedao/docs/happy-path',
  component: ComponentCreator('/savedao/docs/happy-path'),
  exact: true,
  
},
{
  path: '/savedao/docs/helping-docs',
  component: ComponentCreator('/savedao/docs/helping-docs'),
  exact: true,
  
},
{
  path: '/savedao/docs/how-does-it-work',
  component: ComponentCreator('/savedao/docs/how-does-it-work'),
  exact: true,
  
},
{
  path: '/savedao/docs/interacting-with-escrow',
  component: ComponentCreator('/savedao/docs/interacting-with-escrow'),
  exact: true,
  
},
{
  path: '/savedao/docs/join-a-raid',
  component: ComponentCreator('/savedao/docs/join-a-raid'),
  exact: true,
  
},
{
  path: '/savedao/docs/lead-a-raid',
  component: ComponentCreator('/savedao/docs/lead-a-raid'),
  exact: true,
  
},
{
  path: '/savedao/docs/learn-about-web3',
  component: ComponentCreator('/savedao/docs/learn-about-web3'),
  exact: true,
  
},
{
  path: '/savedao/docs/mdx',
  component: ComponentCreator('/savedao/docs/mdx'),
  exact: true,
  
},
{
  path: '/savedao/docs/migration-to-xdai',
  component: ComponentCreator('/savedao/docs/migration-to-xdai'),
  exact: true,
  
},
{
  path: '/savedao/docs/overview',
  component: ComponentCreator('/savedao/docs/overview'),
  exact: true,
  
},
{
  path: '/savedao/docs/overview-code-of-conduct',
  component: ComponentCreator('/savedao/docs/overview-code-of-conduct'),
  exact: true,
  
},
{
  path: '/savedao/docs/overview-molochv2-primer',
  component: ComponentCreator('/savedao/docs/overview-molochv2-primer'),
  exact: true,
  
},
{
  path: '/savedao/docs/overview-raid-guild-shares',
  component: ComponentCreator('/savedao/docs/overview-raid-guild-shares'),
  exact: true,
  
},
{
  path: '/savedao/docs/overview-roles',
  component: ComponentCreator('/savedao/docs/overview-roles'),
  exact: true,
  
},
{
  path: '/savedao/docs/proposal-types',
  component: ComponentCreator('/savedao/docs/proposal-types'),
  exact: true,
  
},
{
  path: '/savedao/docs/references',
  component: ComponentCreator('/savedao/docs/references'),
  exact: true,
  
},
{
  path: '/savedao/docs/requesting-payment',
  component: ComponentCreator('/savedao/docs/requesting-payment'),
  exact: true,
  
},
{
  path: '/savedao/docs/rips',
  component: ComponentCreator('/savedao/docs/rips'),
  exact: true,
  
},
{
  path: '/savedao/docs/shipped',
  component: ComponentCreator('/savedao/docs/shipped'),
  exact: true,
  
},
{
  path: '/savedao/docs/summon-a-raid-party',
  component: ComponentCreator('/savedao/docs/summon-a-raid-party'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
