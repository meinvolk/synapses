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
              <div
                class="login et_builder_inner_content et_pb_gutters3 login"
              >
              <h2>Employee Login</h2>
                        <input
                        type="password"
                        v-model="formPassword"
                        name="password"
                        label="Password"
                        id="password"
                        ></input>

                    <button @click="login">Login</button>

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
  data() {
    return {
      formPassword: ''
    }
  },
  mounted() {
    if (this.$store.getters.checkPassword) {
        this.$router.push({ path: 'loginpage/forms' });
    }
  },
  methods: {
    login () {
      this.$store.dispatch('checkPassword', this.formPassword ).then((s) => {
        this.$router.push({ path: 'loginpage/forms' });
      }).catch((e) => {
        console.log(e.message);
      })
    },
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
