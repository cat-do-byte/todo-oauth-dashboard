<template>
  <v-layout>
    <span slot="header"> Register </span>
    <div slot>
      <form action="#" id="login-form" class="login-form">
        <div class="form-group">
          <input
            type="text"
            class="form-control rounded-left"
            placeholder="Email"
            required
            name="email"
          />
        </div>
        <div class="form-group d-flex">
          <input
            type="password"
            class="form-control rounded-left"
            placeholder="Password"
            required
            name="password"
          />
        </div>

        <div class="form-group">
          <button
            id="login"
            type="submit"
            class="btn btn-primary rounded submit p-3 px-5"
            @click="register"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </v-layout>
</template>

<script>
import VLayout from "@/layouts/Auth.vue";
import VCard from "@/components/Card.vue";

export default {
  /**
   * The name of the page.
   */
  name: "Register",

  /**
   * The components the page can use.
   */
  components: {
    VLayout,
    VCard,
  },

  /**
   * The data that can be used by the page.
   *
   * @returns {Object} The view-model data.
   */
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    };
  },

  methods: {
    register() {
      this.$http.post("/register", this.user);
    },
  },
};
</script>
