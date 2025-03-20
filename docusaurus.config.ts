import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'CodeVideo Documentation',
  tagline: 'Documentation for CodeVideo TypeScript packages',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://docs.codevideo.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'codevideo',
  projectName: 'docs.codevideo.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/codevideo/docs.codevideo.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'CodeVideo Docs',
      logo: {
        alt: 'CodeVideo Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/overview',
          position: 'left',
          label: 'Overview',
        },
        {
          to: '/docs/quick-start',
          position: 'left',
          label: 'Video Quick Start',
        },
        {
          to: '/docs/libraries',
          position: 'left',
          label: 'Library Documentation',
        },
        {
          href: 'https://github.com/codevideo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/overview',
            },
            {
              label: 'Quick Start',
              to: '/docs/quick-start',
            },
            {
              label: 'Library Documentation',
              to: '/docs/libraries',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/codevideo/discussions',
            },
          ],
        },
        {
          title: 'All Repositories',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/codevideo',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CodeVideo.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
