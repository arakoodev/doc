// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Arakoo.ai',
  tagline: 'Serverless, Compression and Cache for GPT & LLM',
  favicon: 'img/logo-arako.ico',

  // Set the production url of your site here
  url: 'https://www.arakoo.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'arakoodev', // Usually your GitHub org/user name.
  projectName: 'doc', // Usually your repo name.


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'doc',
          routeBasePath: 'doc',
          sidebarPath: require.resolve('./sidebars.js'),
          disableVersioning: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogTitle: "Blog",
          path: 'blog',
          routeBasePath: 'blog',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],


  plugins: [
    './my-plugin',
    [
      '@docusaurus/plugin-content-blog',
      { 
        blogTitle: "case-studies",
        id: 'case-studies',
        routeBasePath: 'case-studies',
        path: './case-studies',
        blogListComponent: "/src/components/case-studies/BlogListPage",
        blogPostComponent: "/src/components/case-studies/BlogPostPage"
      },
    ],
    
  ],



  // plugins: [
  //   [
  //     '@docusaurus/plugin-content-blog',
  //     {
  //       /**
  //        * Required for any multi-instance plugin
  //        */
  //       id: 'blog',
  //       /**
  //        * URL route for the blog section of your site.
  //        * *DO NOT* include a trailing slash.
  //        */
  //       routeBasePath: 'blog',
  //       /**
  //        * Path to data on filesystem relative to site dir.
  //        */
  //       path: './blog',
  //     },
  //   ],
  //   [
  //     async function myPlugin(context, options) {
  //       return {
  //         name: "docusaurus-tailwindcss",
  //         configurePostCss(postcssOptions) {
  //           // Appends TailwindCSS and AutoPrefixer.
  //           postcssOptions.plugins.push(require("tailwindcss"));
  //           postcssOptions.plugins.push(require("autoprefixer"));
  //           return postcssOptions;
  //         },
  //       };
  //     },
  //   ]
  // ],
//   [
//     async function myPlugin(context, options) {
//     return {
//       name: "docusaurus-tailwindcss",
//       configurePostCss(postcssOptions) {
//         // Appends TailwindCSS and AutoPrefixer.
//         postcssOptions.plugins.push(require("tailwindcss"));
//         postcssOptions.plugins.push(require("autoprefixer"));
//         return postcssOptions;
//       },
//     };
//   },
// ]

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    
    
    (
      
      {

      colorMode: {
        // defaultMode: undefined,
        // disableSwitch: true,
        // respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'arakoo',
        logo: {
          alt: 'arakoo Logo',
          height: 90,
          src: 'img/arakoo-01.png',
        },
        items: [
          
          // {
          //   to: 'twilio-video-competitor/',
          //   label: 'twilio-video-competitor',
          //   position: 'right',
          // },
          // {
          //   to: 'pricing/',
          //   label: 'Pricing',
          //   position: 'right',
          // },
          {
            to: 'privacy/',
            label: 'Privacy',
            position: 'right',
          },
          {
            to: 'doc/intro/',
            activeBasePath: 'doc',
            label: 'Doc',
            position: 'right',
          },
          // {
          //   to: 'case-studies/',
          //   label: 'case-studies',
          //   position: 'right',
          // },
          {
            to: 'blog/',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://discord.gg/MtEPK9cnSF',
            // label: 'Discord',
            position: 'right',
            className: 'navbar__icon navbar__discord',
          },
          {
            href: 'https://github.com/arakoodev',
            // label: 'Github',
            position: 'right',
            className: 'navbar__icon navbar__github',
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
                label: 'Docs',
                to: '/doc/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/arakoo',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/MtEPK9cnSF',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/arakooai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Case Studies',
              //   to: '/case-studies',
              // },
              // {
              //   label: 'Twilio Video',
              //   to: '/twilio-video-competitor/',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/arakoodev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Arakoo Project`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: lightCodeTheme,
      },
    }),



};

module.exports = config;
