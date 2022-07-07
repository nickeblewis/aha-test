export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'aha-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        
          hid: 'aha-script',
          innerHTML: `
          (function(w, d, s, o, f, js, fjs) {
            w['aha-widget'] = o;w[o] = w[o] || function() {(w[o].q = w[o].q || []).push(arguments);};
            js = d.createElement(s);fjs = d.getElementsByTagName(s)[0];js.id = o;js.src = f;js.async = 1;fjs.parentNode.insertBefore(js, fjs);
          })(window,document,'script','aha','https://cdn.aha.io:443/assets/feedback/feedback.js');
          // aha('initialize', {
          //      account: 'ideas7689vixio-product-bub',
          //             applicationId: '7116907051039811774',
          //             jwt: "4c5c40d26d38f690941267b34c008f6367243e28edf4c8742d3ac2f4333e89c9"
          //   });
          `,
          type: 'text/javascript',
          charset: 'utf-8'
        
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
