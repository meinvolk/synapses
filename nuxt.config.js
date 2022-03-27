export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "synapses",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Arimo:regular,italic,700,700italic|Rosario:300,regular,500,600,700,300italic,italic,500italic,600italic,700italic|Cherry+Cream+Soda:regular|Zilla+Slab+Highlight:regular,700|Slabo+27px:regular|Slabo+13px:regular|Rosarivo:regular,italic|Sarala:regular,700&amp;subset=latin-ext,greek,hebrew,greek-ext,vietnamese,cyrillic,latin,cyrillic-ext,devanagari&amp;display=swap",
      },
      { rel: "stylesheet", href: "/assets/css/header.css" },
      { rel: "stylesheet", href: "/assets/css/buttons.css" },
      { rel: "stylesheet", href: "/assets/css/caldera-forms-front.css" },
      { rel: "stylesheet", href: "/assets/css/dashicons.css" },
      { rel: "stylesheet", href: "/assets/css/forms.css" },
      { rel: "stylesheet", href: "/assets/css/gem.css" },
      { rel: "stylesheet", href: "/assets/css/i10n.css" },
      { rel: "stylesheet", href: "/assets/css/login-page-styles.css" },
      { rel: "stylesheet", href: "/assets/css/login.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/assets/css/style2.css" },
      { rel: "stylesheet", href: "/assets/css/style3.css" },
      { rel: "stylesheet", href: "/assets/css/font-awesome.css" },
      { rel: "stylesheet", href: "/assets/css/testimonial-rotator-style.css" },
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.6.0.min.js",
        type: "text/javascript",
      },
      {
        src: "https://code.jquery.com/jquery-migrate-3.3.2.min.js",
        type: "text/javascript",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
