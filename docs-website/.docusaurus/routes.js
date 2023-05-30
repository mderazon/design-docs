import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'fba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '835'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '95d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '5c3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ee3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '952'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '4bf'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '66a'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '0ea'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '239'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '944'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '720'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '744'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '4a7'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'eb8'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'a8d'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'e16'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '0c7'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'fef'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'aa1'),
    routes: [
      {
        path: '/docs/pi-1/feature-1/',
        component: ComponentCreator('/docs/pi-1/feature-1/', 'c1a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pi-1/feature-2/',
        component: ComponentCreator('/docs/pi-1/feature-2/', '5e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pi-2/feature-3/part-1',
        component: ComponentCreator('/docs/pi-2/feature-3/part-1', '17d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pi-2/feature-3/part-2',
        component: ComponentCreator('/docs/pi-2/feature-3/part-2', '129'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/pi-2/feature-4/feature',
        component: ComponentCreator('/docs/pi-2/feature-4/feature', 'd89'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '429'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
