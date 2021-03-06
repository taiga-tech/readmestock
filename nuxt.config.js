import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  server: {
    host: '0',
    port: 80,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate: '%sREADME Stock',
    title: 'README Stock | ',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Nuxt + GitHubAPI v4(GraphQL) + Netlifyを使用したポートフォリオサイト',
      },
      // global OGP
      { hid: 'og:title', property: 'og:title', content: 'README Stock' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://taiga-tech.tk/' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://taiga-tech.tk/icon.png/',
      },
      { property: 'og:site_name', content: 'README Stock' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Nuxt + GitHub API(GraphQL) + Netlifyを使用したポートフォリオサイト',
      },
      // Twitter OGP
      { name: 'twitter:card', content: 'summary' },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          'Nuxt + GitHubAPI v4(GraphQL) + Netlifyを使用したポートフォリオサイト',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  pwa: {
    manifest: {
      name: 'README Stock',
      short_name: 'README Stock',
      lang: 'ja',
      useWebmanifestExtension: false,
      background_color: '#272727',
      theme_color: '#272727',
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  // css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vuetify-theme-cache.js',
    { src: '~/plugins/prism.js', mode: 'client' },
    // '~/plugins/vue-chart.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
  ],

  moment: { locales: ['ja'] },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    '@nuxtjs/dotenv',

    '@nuxtjs/markdownit',

    '@nuxtjs/apollo',

    '@nuxtjs/google-gtag',
  ],

  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-auth.js',
    },
  },

  markdownit: {
    langPrefix: 'language-',
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードに変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true, // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
  },

  'google-gtag': {
    id: process.env.GOOGLE_ANALYTICS_ID,
    // debug: true,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  // axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  // content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    // treeShake: true,
    // defaultAssets: {
    //   font: false,
    // },
    theme: {
      light: false,
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          anchor: '#55a0f4',
        },
      },
    },
  },

  env: {
    GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN,
    BASE_URL: process.env.BASE_URL,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool = 'source-map'
      }
    },
  },

  generate: { fallback: true },
}
