import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const DefaultLocale = 'en';

const config: Config = {
  title: 'My Site2222',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://illacloud.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/illa-website/',
  staticDirectories: ['public', 'static'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'illacloud', // Usually your GitHub org/user name.
  projectName: 'illa-website', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ja', 'de'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
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
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'ILLA',
      logo: {
        alt: 'ILLA',
        srcDark: 'img/logo.svg',
        src: 'img/whiteLogo.svg',
        width: '51px',
        height: '24px',
      },
      items: [{ to: '/blog', label: 'Blog', position: 'left' }],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    async function taildindcss() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(options) {
          options.plugins.push(
            require('postcss-import'),
            require('tailwindcss'),
            require('postcss-nested'),
            require('autoprefixer'),
          );

          return options;
        },
      };
    },
    [
      './plugins/blog-plugin.js',
      {
        blogTitle: 'Blog',
        blogDescription:
          'A resource for ILLA, front-end ecosystem, and web development',
        routeBasePath: '/blog',
        postsPerPage: 12,
        blogSidebarTitle: 'All posts',
        blogSidebarCount: 0,
        feedOptions: {
          type: 'all',
          copyright: `Copyright © ${new Date().getFullYear()} ILLA.`,
        },
      },
    ],
  ],
};

export default config;
