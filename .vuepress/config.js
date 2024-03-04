module.exports = {
  // 多语言配置
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },

  "title": "my-blog-reco-1.0",
  "description": "my-blog-reco-1.0-desc",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    // 博客配置
    "blogConfig": {
      "category": {
        "location": 2, // 在导航栏菜单中所占的位置，默认2
        "text": "Category" // 默认文案 “分类”
      },
      "tag": {
        "location": 3, // 在导航栏菜单中所占的位置，默认3
        "text": "Tag" // 默认文案 “标签”
      }
    },
    // 信息栏展示社交信息
    socialLinks: [
      { icon: 'reco-github', link: 'https://github.com/recoluan' },
      { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
    ],
    // 友链
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png", // 导航栏左侧logo
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "LiHairui", // 作者
    "authorAvatar": "/avatar.png", // 作者头像

    // 备案
    record: 'ICP 备案文案',
    recordLink: 'ICP 备案指向链接',
    cyberSecurityRecord: '公安部备案文案',
    cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    startYear: '2024',

    huawei: true, // 首页可以显示 “华为” 文案，需要以下配置。

    // mode: 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    // modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示

    subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容

    // 密钥
    keyPage: {
      // keys: ['e10adc3949ba59abbe56e057f20f883e'], // 1.3.0 版本后需要设置为密文
      color: '#42b983', // 登录页动画球的颜色
      lineColor: '#42b983' // 登录页动画线的颜色
    }
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [

  ]
}