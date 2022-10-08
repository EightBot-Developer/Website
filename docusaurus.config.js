// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EightBotWeb',
  tagline: 'EightBotは高性能Botです。',
  url: 'https://eightbot-developer.github.io',
  baseUrl: '/Website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EightBot-Developer', // Usually your GitHub org/user name.
  projectName: 'Website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/EightBot-Developer/Website/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/EightBot-Developer/Website/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        searchBarPosition: "right",
        language: "ja",
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'EightBot',
        logo: {
          alt: 'EightBot logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/docs/tutorial/start', label: 'Botチュートリアル', position: 'left'},
          {to: '/docs/command_list', label: 'コマンドリスト', position: 'left'},
          {to: '/docs/version/link', label: 'バージョンページへのリンク', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/EightBot-Developer/Website',
            image: 'https://github.githubassets.com/favicons/favicon.png',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ドキュメントなど',
            items: [
              {
                label: 'Botのチュートリアル',
                to: '/docs/tutorial/start',
              },
            ],
          },
          {
            title: 'コミュニティー',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/eightbot1644',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/e47A2KcY4j',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCzdJ4IaMWkxGACQGLiAJp5g',
              },
            ],
          },
          {
            title: 'その他',
            items: [
              {
                label: 'ブログ',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/EightBot-Developer/Website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
