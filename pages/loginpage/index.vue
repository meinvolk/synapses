<template>
  <div id="et-main-area">
    <div id="main-content">
      <article
        id="post-730"
        class="post-730 page type-page status-publish hentry"
      >
        <div class="entry-content">
          <div id="et-boc" class="et-boc">
            <div class="et-l et-l--post">
              <div class="login et_builder_inner_content et_pb_gutters3 login">
                <h2>Employee Login</h2>
                <a @click="$auth.loginWith('auth0')">Sign In</a>
              </div>
              <!-- .et_builder_inner_content -->
            </div>
            <!-- .et-l -->
          </div>
          <!-- #et-boc -->
        </div>
        <!-- .entry-content -->
      </article>
      <!-- .et_pb_post -->
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  mounted() {
    if (this.$auth.loggedIn) {
      this.$router.push({ path: "/loginpage/forms" });
    }
  },
  head() {
    return {
      link: [
        { rel: "stylesheet", href: "/assets/css/et-core-unified-730.css" },
      ],
    };
  },
};
</script>

<style scoped>
.login {
  padding: 300px 0 200px 0;
  display: block;
  max-width: 500px;
  margin: auto;
  text-align: center;
}

.login h2 {
  font-size: 60px;
}

.login input {
  margin-top: 10px;
}

.login button {
  padding: 5px 10px;
}
</style>
