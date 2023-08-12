
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Montserrat: true,
      }
    },
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  css: [
    '@/assets/css/main.css',
  ],
  env: {
    BASE_URL: 'http://default-pi.ru:1337/api'
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

module.exports = {
  server: {
   host: process.env.NUXT_HOST,
   port: process.env.NUXT_PORT,
  },
};
