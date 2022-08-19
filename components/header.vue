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

    <header id="main-header" data-height-onload="110" class="opaque-header">
      <div class="container clearfix et_menu_container header-container">
        <div>
          <NuxtLink to="/">
            <img
              src="/assets/images/Synapses_IOM_LogoproofEIDTED22-1-e1512750803254.png"
              alt="Synapses IOM"
              id="logo"
              class="logo-img"
            />
          </NuxtLink>
        </div>
        


        <nav role="navigation" class="mobile-navigation">
          <div id="menuToggle">
            <!--
            A fake / hidden checkbox is used as click reciever,
            so you can use the :checked selector on it.
            -->
            <input type="checkbox" />
            
            <!--
            Some spans to act as a hamburger.
            
            They are acting like a real hamburger,
            not that McDonalds stuff.
            -->
            <span></span>
            <span></span>
            <span></span>
            
            <!--
            Too bad the menu has to be inside of the button
            but hey, it's pure CSS magic.
            -->
            <ul id="menu">
              <NuxtLink to="/" aria-current="page"><li>Home</li></NuxtLink>
              <NuxtLink to="/benefits"><li>Benefits</li></NuxtLink>
              <NuxtLink to="/services/intraoperative-neuromonitoring"><li>Intraoperative Neuromonitoring</li></NuxtLink>
              <NuxtLink to="/services/continuous-eeg"><li>Continuous EEG</li></NuxtLink>
              <NuxtLink to="/careers"><li>Careers</li></NuxtLink>
              <NuxtLink to="/schedule"><li>Schedule A Case</li></NuxtLink>
              <NuxtLink to="/patient-billing"><li>Patient Billing</li></NuxtLink>
              <NuxtLink to="/loginpage"><li>Employee login</li></NuxtLink>
            </ul>
          </div>
        </nav>

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
              <li class="page_item page-item-57">
                <NuxtLink to="/patient-billing">Patient Billing</NuxtLink>
              </li>
              <li class="page_item page-item-730">
                <NuxtLink to="/loginpage">Employee login</NuxtLink>
              </li>
            </ul>
          </nav>  
        </div>
        <!-- #et-top-navigation -->

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

<style lang="css">

@media only screen and (max-width: 981px) {
  .logo-img {
    display: none !important;
  }
  .gold-seal {
    display: none !important;
  }
}

.mobile-navigation {
  position: absolute;
}
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

#top-menu li {
  padding-bottom: 5px;
}

.logo-img {
  width: 214px;
}

.gold-seal {
  width: 145px;
}

#menuToggle
{
  position: relative;
  top: 50px;
  left: 50px;
  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a
{
  text-decoration: none;
  color: #232323;
  
  transition: color 0.3s ease;
}

#menuToggle a:hover
{
  color: tomato;
}


#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -60px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  right: 50px;
  
  background: rgb(255, 102, 0);
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu
{
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -127px;
  padding: 0 0 15px 70px;
  padding-top: 125px;
  
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 10px 0;
  font-size: 22px;
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul
{
  transform: none;
}
</style>
