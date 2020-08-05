import Fiber from 'fibers'
import Sass from 'sass'
import pkg from './package'

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
    htmlAttrs: {
      lang: 'en',
    },
    title: pkg.headMeta.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        itemprop: 'description',
        content: pkg.headMeta.description,
      },
      { name: 'image', content: pkg.headMeta.imageUrl },
      { itemprop: 'name', content: pkg.headMeta.title },
      { itemprop: 'image', content: pkg.headMeta.imageUrl },
      { name: 'twitter:card', content: 'summary' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: pkg.headMeta.title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: pkg.headMeta.description,
      },
      { name: 'twitter:site', content: pkg.headMeta.twitter },
      { name: 'twitter:creator', content: pkg.headMeta.twitter },
      { name: 'twitter:image:src', content: pkg.headMeta.imageUrl },
      { hid: 'og:title', name: 'og:title', content: pkg.headMeta.title },
      {
        hid: 'og:description',
        name: 'og:description',
        content: pkg.headMeta.description,
      },
      { name: 'og:image', content: pkg.headMeta.imageUrl },
      { hid: 'og:url', name: 'og:url', content: pkg.headMeta.siteUrl },
      { name: 'og:site_name', content: pkg.headMeta.title },
      { name: 'og:locale', content: 'en_GB' },
      { name: 'og:type', content: 'website' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
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
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    loaders: {
      sass: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
  },
}
