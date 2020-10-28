const config = require("./.environment.json");

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: process.env.NUXT_REND_TARGET || 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'NuxtProject',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: "~/node_modules/highlight.js/styles/hopscotch.css", lang: "css" },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/window" },
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/validate" },
    { src: "~/plugins/contentful.js" },
  ],

  // Markdown parser done right (https://github.com/markdown-it/markdown-it)
  markdownit: {
    html: true,
    injected: true,
    use: ["markdown-it-highlightjs"],
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/markdown-it/markdown-it
    "@nuxtjs/markdownit",
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    transpile: ["vee-validate/dist/rules"],
    extend(config, ctx) {},
  },

  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID || config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN || config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: process.env.CTF_PERSON_ID || config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID || config.CTF_BLOG_POST_TYPE_ID
  },
}
