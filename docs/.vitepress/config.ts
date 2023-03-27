import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  title: ' ● Mass ●',
  titleTemplate: 'mass',
  description: '你真的，不打算用自己喜欢的方式去过这一生吗？',

  themeConfig: {
    nav: [
      {
        text: '学习历程',
        items:[
          { text: 'Java', link: '/article/example' },
          { text: 'Mysql', link: '/record/temp' }
        ]
      }

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: {
      '/article/' : [
        {
          text: 'Guide',
          collapsed: true,
          items: [
            { text: 'Example', link: '/article/example' },
            { text: '我的第一篇文章', link: '/article/first' },
            // ...
          ],
        },
      ],

      '/record/' : [
        {
          text: 'Record',
          collapsed: true,
          items: [
            { text: 'Record', link: '/record/temp' },
            // ...
          ],
        },
      ],

    },

    // footer: {
      // message: 'Released under the MIT License.',
      // copyright: 'Copyright © 2019-present Evan You'
    // }

    docFooter: {
      prev: '←上一篇',
      next: '下一篇→'
    },
  },
});
