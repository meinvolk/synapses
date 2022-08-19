<template>
  <footer id="main-footer">
    <div class="container">
      <div id="footer-widgets" class="clearfix">
        <div class="footer-widget">
          <div
            id="media_image-2"
            class="fwidget et_pb_widget widget_media_image"
          >
            <img
              width="350"
              height="235"
              src="/assets/images/Synapses_IOM_LogoproofEIDTED22-1-e1512750803254.png"
              class="image wp-image-211 attachment-full size-full"
              alt="Synapses IOM Logo"
              loading="lazy"
              style="max-width: 100%; height: auto"
            />
          </div>
          <!-- end .fwidget -->
          <div id="text-5" class="fwidget et_pb_widget widget_text">
            <div class="textwidget"><p></p></div>
          </div>
          <!-- end .fwidget -->
        </div>
        <!-- end .footer-widget -->
        <div class="footer-widget">
          <div id="text-3" class="fwidget et_pb_widget widget_text">
            <h4 class="title">Synapses IOM</h4>
            <div class="textwidget">
              <p>
                <a href="tel: 866-766-3783">Phone: (866) 76-NERVE<br /> </a>Reg
                Fax: (248) 254-6524<br />
                Case Fax: (248) 573-2372
              </p>
            </div>
          </div>
          <!-- end .fwidget -->
          <div id="text-2" class="fwidget et_pb_widget widget_text">
            <div class="textwidget">
              <p>
                <span id="siteseal"></span>
              </p>
            </div>
          </div>

          <!-- end .fwidget -->
        </div>
        <!-- end .footer-widget -->
        <div class="footer-widget">
          <div id="pages-2" class="fwidget et_pb_widget widget_pages">
            <h4 class="title">Pages</h4>
            <ul>
              <li class="page_item page-item-2 current_page_item">
                <NuxtLink to="/" aria-current="page">Home</NuxtLink>
              </li>
              <li class="page_item page-item-157">
                <NuxtLink to="/benefits">Benefits</NuxtLink>
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
              <li class="page_item page-item-203">
                <NuxtLink to="/services/intraoperative-neuromonitoring"
                  >Intraoperative Neuromonitoring</NuxtLink
                >
              </li>
              <li class="page_item page-item-849">
                <NuxtLink to="/services/continuous-eeg/"
                  >Continuous EEG</NuxtLink
                >
              </li>
            </ul>
          </div>
          <!-- end .fwidget -->
        </div>
        <!-- end .footer-widget -->
        <div class="footer-widget">
          <div id="text-4" class="fwidget et_pb_widget widget_text">
            <div class="textwidget">
              <p>
                <a
                  rel="noopener noreferrer"
                  href="https://www.jointcommission.org/"
                  target="_blank"
                >
                  <img
                    src="/assets/images/goldseal_transparent_gif.gif"
                    alt="The Joint Commission Gold Seal"
                    data-height-percentage="100"
                    class="gold-seal"
                  />
                </a>
                <a href="https://www.aset.org/"
                  ><img
                    loading="lazy"
                    src="/assets/images/ASET-logo-300x129.jpg"
                    alt="ASET logo"
                    width="300"
                    height="129"
                    class="alignnone size-medium wp-image-593" /></a
                ><a href="http://www.abret.org/"
                  ><img
                    loading="lazy"
                    src="/assets/images/ABRET-Logo-300x67.jpg"
                    alt="ABRET Logo"
                    width="300"
                    height="67"
                    class="alignnone size-medium wp-image-594" /></a
                ><a href="http://asnm.org/"
                  ><img
                    loading="lazy"
                    src="/assets/images/ASNM-logo-1-300x130.jpg"
                    alt="ASNM logo"
                    width="300"
                    height="130"
                    class="alignnone size-medium wp-image-800"
                /></a>
              </p>
            </div>
          </div>
          <!-- end .fwidget -->
        </div>
        <!-- end .footer-widget -->
      </div>
      <!-- #footer-widgets -->
    </div>
    <!-- .container -->

    <div id="footer-bottom">
      <div class="container clearfix">
        <div id="footer-info">
          ©{{ new Date().getFullYear() }} |
          <NuxtLink to="/loginpage">Admin login</NuxtLink>
        </div>
      </div>
      <!-- .container -->
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.gold-seal {
  width: 125px;
  padding-bottom: 10px;
}
</style>
