import axios from 'axios'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'RocMark',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'config', name: 'config', content: "Welcome to RocMark's Site" }
    ],
    link: [
      // '/' 指向 /static
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.js' }
    ]
  },
  /*
  ** Router
  ** See https://nuxtjs.org/api/configuration-router
  */
  router: {
    prefetchLinks: true,
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    middleware: 'router-guard'
  },
  /*
  ** Global CSS
  css: ['~/assets/main.css'], // use pure css file
  */
  css: [
    // '~/assets/scss/_base.scss'
    './assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    // { src: '~/plugins/datepicker.js', mode: 'client' }
  ],
  styleResources: {
    scss: [
      './assets/scss/main.scss'
    ]
  },
  /*
  ** Loading
  ** See https://zh.nuxtjs.org/api/configuration-loading/
  */
  // loading: false,
  loading: {
    color: '#40659b',
    failedColor: 'red',
    height: '2px',
    throttle: 200, // 防止閃爍
    duration: 3000, // default: 5000
    continuous: false, // 加載時間超過 duration 保持動畫進度條
    css: true // 設為 false 刪除默認進度條樣式，需自行添加樣式
  },
  /*
  ** Transition
  ** See https://nuxtjs.org/api/configuration-transition/
  */
  pageTransition: {
    name: 'page', // 對應 CSS .page-enter-active
    mode: 'out-in'
    // beforeEnter (el) { } // 建議使用 router-guard.js
  },
  layoutTransition: {
    name: 'layout', // 對應 CSS .layout-enter-active
    mode: 'out-in'
  },
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap' // 必須放在最下面
  ],
  /* GA */
  googleAnalytics: {
    id: 'UA-174600613-1'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.VUE_APP_API_BASE_URL || ''
  },
  /*
  ** sitemap module configuration
  ** See https://www.npmjs.com/package/@nuxtjs/sitemap
  */
  sitemap: {
    hostname: 'https://rocmark.online',
    gzip: true,
    exclude: [
      '/admin',
      '/admin/**', // 只包含子路徑
      '/account',
      '/account/**'
    ]
    // 只有靜態網站、分頁少的才會用陣列自行撰寫
    // routes: [{ url: '/page/3', changefreq: 'daily', priority: 1, lastmod: '2017-06-30T13:30:00.000Z' }]
    // routes: async () => {
    //   const baseURL = process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000/api'
    //   const request = axios.create({ baseURL })
    //   const { data: resData } = await request.get('/videos')
    //   return resData.data.map((el) => { return `/watch/${el.id}` })
    // }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS: false, // 是否打包成 css 檔，而非寫在 html 上
    // 將超過 1KB 的圖檔，轉換成用 base64 編碼
    loaders: {
      imgUrl: { limit: 1 * 1000 } // 1000 = 1KB
    },
    // 用於覆蓋 webpack 設定檔
    extend (config, ctx) {
      // console.log(config) // 會將內容印在終端機
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  /*
  ** Use Nuxt to Build Express Server
  ** See https://nuxtjs.org/api/configuration-servermiddleware/
  */
  serverMiddleware: [
    { path: '/api', handler: '~/server/api.js' } // API BaseURL http://localhost:3001/api/
  ],
  server: {
    port: 3001
  }
}
