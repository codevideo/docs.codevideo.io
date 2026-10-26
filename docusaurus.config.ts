import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'CodeVideo Docs',
  tagline: 'Turn a JSON list of actions into a narrated coding video',
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
          // docs-only mode: the Quick Start doc (slug: /) is the homepage
          routeBasePath: '/',
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
    image: 'img/og.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'CodeVideo Docs',
      logo: {
        alt: 'CodeVideo Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
      // Plain links: with a single sidebar, `type: 'doc'` items would all be
      // highlighted on every page.
      items: [
        {
          to: '/',
          activeBaseRegex: '^/$',
          position: 'left',
          label: 'Quick Start',
        },
        {
          to: '/api',
          position: 'left',
          label: 'API',
        },
        {
          to: '/actions',
          position: 'left',
          label: 'Actions',
        },
        {
          to: '/libraries',
          position: 'left',
          label: 'Libraries',
        },
        {
          href: 'https://studio.codevideo.io/account',
          label: 'Get an API key',
          position: 'right',
        },
        {
          href: 'https://codevideo.io',
          label: 'codevideo.io',
          position: 'right',
        },
        {
          href: 'https://github.com/codevideo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Quick Start',
              to: '/',
            },
            {
              label: 'API reference',
              to: '/api',
            },
            {
              label: 'Actions',
              to: '/actions',
            },
            {
              label: 'Overview',
              to: '/overview',
            },
            {
              label: 'CLI',
              to: '/cli',
            },
            {
              label: 'Libraries',
              to: '/libraries',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'CodeVideo',
              href: 'https://codevideo.io',
            },
            {
              label: 'CodeVideo Studio',
              href: 'https://studio.codevideo.io',
            },
            {
              label: 'Get an API key',
              href: 'https://studio.codevideo.io/account',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/orgs/codevideo/discussions',
            },
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
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
