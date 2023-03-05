import path from 'path'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  //target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hanseCom',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;600&display=swap',
      },
    ],
  },

  alias: {
    components: path.resolve(__dirname, './components'),
    images: path.resolve(__dirname, './assets/images'),
    style: path.resolve(__dirname, './assets/style'),
    videos: path.resolve(__dirname, './assets/videos'),
    svg: path.resolve(__dirname, './assets/svg'),
    assets: path.resolve(__dirname, './assets'),
    types: path.resolve(__dirname, './types'),
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/reset.scss',
    '@/assets/style/foundations/colors.scss',
    '@/assets/style/helpers.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    proxy: true,
  },
  proxy: {
    '/api/': {
      target: 'https://bcferriesapi.ca/api/',
      pathRewrite: { '^/api/': '' },
      changeOrigin: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
