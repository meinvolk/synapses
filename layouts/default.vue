<template>
  <body
    class="home page-template-default page page-id-2 et_color_scheme_orange et_pb_button_helper_class et_transparent_nav et_fullwidth_nav et_fullwidth_secondary_nav et_fixed_nav et_show_nav et_hide_mobile_logo et_secondary_nav_enabled et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_header_style_left et_pb_footer_columns4 et_cover_background et_pb_gutter et_pb_gutters3 et_pb_pagebuilder_layout et_smooth_scroll et_no_sidebar et_divi_theme et-db et_minified_js et_minified_css"
  >
    <div id="page-container">
      
	  <Header />

      <Nuxt />

      <Footer />

      </div>
    <!-- #page-container -->
  </body>
</template>

<script>
  export default {
    head(){
      return {
        title: "Test"
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }
</script>
<style>
</style>