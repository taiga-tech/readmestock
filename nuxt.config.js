// require('dotenv').config()

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  server: { host: '0', port: 80 },

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
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.taiga-tech.tk/',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.taiga-tech.tk/icon.png/',
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
      background_color: '#121212',
      theme_color: '#121212',
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  // css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vuetify-theme-cache.js' },
    { src: '~/plugins/prism.js', mode: 'client' },
    { src: '~/plugins/markdown-it.js' },
    { src: '~/plugins/vue-scrollactive.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    // 'nuxt-purgecss',
  ],

  moment: { locales: ['ja'] },

  // purgeCSS: {
  //   enabled: process.env.NODE_ENV === 'production',
  //   paths: [
  //     'components/**/*.vue',
  //     'layouts/**/*.vue',
  //     'pages/**/*.vue',
  //     'plugins/**/*.js',
  //     './node_modules/vuetify/dist/vuetify.js',
  //     'assets/**/*.scss',
  //   ],
  //   styleExtensions: ['.css'],
  //   whitelist: ['v-application', 'v-application--wrap', 'layout', 'row', 'col'],
  //   whitelistPatterns: [
  //     /^v-((?!application).)*$/,
  //     /^theme--*/,
  //     /.*-transition/,
  //     /^justify-*/,
  //     /^p*-[0-9]/,
  //     /^m*-[0-9]/,
  //     /^text--*/,
  //     /--text$/,
  //     /^row-*/,
  //     /^col-*/,
  //   ],
  //   whitelistPatternsChildren: [/^v-((?!application).)*$/, /^theme--*/],
  //   extractors: [
  //     {
  //       extractor: (content) => content.match(/[A-z0-9-:\\/]+/g) || [],
  //       extensions: ['html', 'vue', 'js'],
  //     },
  //   ],
  // },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
    '@nuxtjs/google-gtag',
  ],

  apollo: {
    clientConfigs: { default: '~/plugins/apollo-auth.js' },
  },

  'google-gtag': {
    id: process.env.GOOGLE_ANALYTICS_ID,
    // debug: true,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  // axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: { liveEdit: false },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: '~/vuetify.options.js',
    defaultAssets: false,
    treeShake: true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    cache: true,
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
    extend(config, { isClient }) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 200000
        config.devtool = 'source-map'
      }
    },
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
    transpile: [/^vuetify/],
  },

  generate: { fallback: true },

  env: {
    GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN,
    BASE_URL: process.env.BASE_URL,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },
}
