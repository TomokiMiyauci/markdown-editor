import path from 'path'
import { Configuration } from '@nuxt/types'

const config: Configuration = {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',

  srcDir: 'src',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['github-markdown-css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    'nuxt-composition-api',
  ],

  eslint: {
    extensions: ['vue', 'ts'],
    cache: true,
  },

  stylelint: {
    lintDirtyModulesOnly: true,
  },

  typescript: { typeCheck: false },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/markdownit'],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['@/assets/variables.scss'],
    defaultAssets: {
      icons: false,
    },
    optionsPath: path.resolve(__dirname, 'vuetify.options.ts'),
  },

  markdownit: {
    injected: true,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    hardSource: true,
    extractCSS: process.env.NODE_ENV === 'production',
    terser: {
      terserOptions: {
        compress: { drop_console: process.env.NODE_ENV === 'production' },
      },
    },

    splitChunks:
      process.env.NODE_ENV === 'production'
        ? {
            layouts: true,
          }
        : undefined,
  },

  generate: {
    interval: 2000,
  },
}

export default config
