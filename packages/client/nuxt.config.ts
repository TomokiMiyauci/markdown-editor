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
    'nuxt-purgecss',
  ],

  eslint: {
    extensions: ['vue', 'ts'],
    cache: true,
  },

  stylelint: {
    lintDirtyModulesOnly: true,
  },

  typescript: { typeCheck: false },

  modern: 'client',

  purgeCSS: {
    whitelist: [
      'html',
      'body',
      'nuxt-progress',
      'spacer',
      'primary',
      'secondary',
      'accent',
      'error',
      'warning',
      'info',
      'success',
      'icon',
      'fab',
      'skeleton',
      'v-application',
      'v-application--wrap',
      'button',
      'input',
      'select',
      'textarea',
      'container',
      'row',
      'no-gutters',
      'col',
      'col-auto',
      'theme',
    ],
    whitelistPatterns: [
      /^theme-/,
      /^application--/,
      /^application-*/,
      /(col|row|fill-height)/,
      /justify-*/,
      /align-*/,
      /^icon/,
      /^(d-)/,
      /^(text)/,
      /.*-transition/,
      /^_/,
      /^v-((?!application).)*$/,
      /^theme--*/,
      /^container/,
    ],
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/markdownit', 'nuxt-webfontloader'],

  webfontloader: {
    google: {
      families: [
        'Source+Code+Pro:400&display=swap',
        'Roboto:100,300,400,500,700,900&display=swap',
      ],
    },
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['@/assets/variables.scss'],
    defaultAssets: false,
    optionsPath: path.resolve(__dirname, 'vuetify.options.ts'),
  },

  markdownit: {
    injected: true,
  },

  features: {
    store: false,
    middleware: false,
    transitions: false,
    deprecations: false,
    validate: false,
    asyncData: false,
    fetch: false,
    clientOnline: false,
    clientPrefetch: false,
    clientUseUrl: false,
    componentAliases: false,
    componentClientOnly: false,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
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

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  generate: {
    interval: 2000,
  },
}

export default config
