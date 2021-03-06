module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: '酷创网络',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  plugins: [{
    src: '~plugins/api',
    ssr: false
  }, {
    src: '~plugins/element-ui',
    ssr: true
  }, {
    src: '~plugins/swiper',
    ssr: true
  }],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~assets/css/global.css'
  ],

  build: {
    /*
     ** Run ESLint on save
     */
    extractCSS: {
      allChunks: true
    },
    vendor: ['axios', 'element-ui', 'vue-awesome-swiper'],
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        }, {
          enforce: 'pre',
          test: /\.(scss)$/,
          loader: 'sass-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
