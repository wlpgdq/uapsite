const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  base: '/uapsite/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'UAP Site',
      description: 'UAP usage help document'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'UAP 文档',
      description: 'UAP使用帮助文档'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/hxlogo.ico` }],
    ['link', { rel: 'mask-icon', href: '/icons/hxlogo.ico', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/hxlogo.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  theme: '@vuepress/vue',
  themeConfig: {
    logo: '/logo-head.png',
    // repo: 'wlpgdq/uapsite',
    editLinks: true,
    // docsDir 'packages/docs/docs',
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/guide/': getGuideSidebar('Guide','Deploy','User Manuals')
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/zh/guide/': getGuideSidebar('指南','部署','用户手册')
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
      ga: 'UA-128189152-1'
    }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>'
    }],
    ['flowchart']
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js'
  ]
})

const userManual = fs
  .readdirSync(path.resolve(__dirname, '../guide/userManual'))
  .map(filename => 'userManual/' + filename.slice(0, -3))
  .sort()

function getGuideSidebar (groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'prepare',
        'deploy',
        'run',
        'redis-sentry'
      ]
    },
    {
      title: groupC,
      collapsable: false,
      children: userManual
    }
  ]
}

// const officalPlugins = fs
//   .readdirSync(path.resolve(__dirname, '../plugin/official'))
//   .map(filename => 'official/' + filename.slice(0, -3))
//   .sort()

// function getPluginSidebar (pluginTitle, pluginIntro, officialPluginTitle) {
//   return [
//     {
//       title: pluginTitle,
//       collapsable: false,
//       children: [
//         ['', pluginIntro],
//         'using-a-plugin',
//         'writing-a-plugin',
//         'life-cycle',
//         'option-api',
//         'context-api'
//       ]
//     },
//     {
//       title: officialPluginTitle,
//       collapsable: false,
//       children: officalPlugins
//     }
//   ]
// }

