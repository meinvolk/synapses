<template>
  <div>
    <div id="top-header">
      <div class="container clearfix">
        <div id="et-info">
          <span id="et-info-phone">(866) 76-NERVE</span>

          <a href="mailto:admin@synapsesiom.com"
            ><span id="et-info-email">admin@synapsesiom.com</span></a
          >
        </div>
        <!-- #et-info -->

        <div id="et-secondary-menu"></div>
        <!-- #et-secondary-menu -->
      </div>
      <!-- .container -->
    </div>
    <!-- #top-header -->

    <header id="main-header" data-height-onload="110">
      <div class="container clearfix et_menu_container">
        <div class="logo_container">
          <span class="logo_helper"></span>
          <NuxtLink to="/">
            <img
              src="/assets/images/Synapses_IOM_LogoproofEIDTED22-1-e1512750803254.png"
              alt="Synapses IOM"
              id="logo"
              data-height-percentage="100"
            />
          </NuxtLink>
        </div>
        <div id="et-top-navigation" data-height="110" data-fixed-height="110">
          <nav id="top-menu-nav">
            <ul id="top-menu" class="nav et_disable_top_tier">
              <li class="page_item page-item-2 current_page_item">
                <NuxtLink to="/" aria-current="page">Home</NuxtLink>
              </li>
              <li class="page_item page-item-157">
                <NuxtLink to="/benefits">Benefits</NuxtLink>
              </li>
              <li class="page_item page-item-855 page_item_has_children">
                <a href="#">Services</a>
                <ul class="children">
                  <li class="page_item page-item-203">
                    <NuxtLink to="/services/intraoperative-neuromonitoring"
                      >Intraoperative Neuromonitoring</NuxtLink
                    >
                  </li>
                  <li class="page_item page-item-849">
                    <NuxtLink to="/services/continuous-eeg"
                      >Continuous EEG</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li class="page_item page-item-156">
                <NuxtLink to="/careers">Careers</NuxtLink>
              </li>
              <li class="page_item page-item-57">
                <NuxtLink to="/schedule">Schedule A Case</NuxtLink>
              </li>
              <li class="page_item page-item-730">
                <NuxtLink to="/loginpage">Employee Login</NuxtLink>
              </li>
            </ul>
          </nav>

          <div id="et_mobile_nav_menu">
            <div class="mobile_nav closed">
              <span class="select_page">Select Page</span>
              <span class="mobile_menu_bar mobile_menu_bar_toggle"></span>
            </div>
          </div>
        </div>
        <!-- #et-top-navigation -->
      </div>
      <!-- .container -->
      <div class="et_search_outer">
        <div class="container et_search_form_container">
          <form
            role="search"
            method="get"
            class="et-search-form"
            action="https://synapsesiom.com/"
          >
            <input
              type="search"
              class="et-search-field"
              placeholder="Search &hellip;"
              value=""
              name="s"
              title="Search for:"
            />
          </form>
          <span class="et_close_search_field"></span>
        </div>
      </div>
    </header>
    <!-- #main-header -->
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
