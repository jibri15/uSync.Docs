const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'uSync',
  tagline: 'uSync all the things',
  url: 'https://usync.jumoo.co.uk',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.ico',
  organizationName: 'Jumoo', // Usually your GitHub org/user name.
  projectName: 'uSync', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Jumoo Docs',
      logo: {
        alt: 'Jumoo docs',
        src: '/img/jumoo.png',
        href: 'https://docs.jumoo.co.uk/',
        target: "_self",
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'uSync',
        },
        {
          href: 'https://translate.jumoo.co.uk/',
          label: 'Translation Manager',
          position: 'left',
          target: "_self",
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },        
        {
          href: 'https://github.com/Jumoo/uSync.Docs',
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
              label: 'uSync',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'Jumoo',
              href: 'https://jumoo.co.uk',
            },
            {
              label: 'Products',
              href: 'https://jumoo.co.uk/products.php',
            },
            {
              label: 'Blog',
              href: 'https://jumoo.co.uk/blog',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Jumoo/uSync.Docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jumoo.`,
    },
    prism: {
      additionalLanguages: ['powershell', 'csharp'], 
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Jumoo/uSync.Docs/edit/v9/',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v9.x - Umbraco 9'
            },
            "8.x": {
              label: 'v8.x - Umbraco 8',
              banner: 'none',
            }
          }
        },        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
