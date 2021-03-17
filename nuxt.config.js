export default {
  head: {
    title: 'my-template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    {
      src: '~/assets/css/app.scss',
      lang: 'scss',
    },
  ],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/axios'],
  tailwindcss: {
    cssPath: '~/assets/css/vendors/tailwind.scss',
  },
  // 切換 router 時,觸發設定
  // router: {
  //   mode: 'history',
  //   routes: [
  //     {
  //       path: '*',
  //       component: '~/layouts/error.vue',
  //     },
  //   ],
  //   middleware: [],
  // },
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
