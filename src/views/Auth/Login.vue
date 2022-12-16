<template>
  <v-layout>
    <span slot="header"> Login </span>
    <div slot>
      <div class="alert alert-success" fade role="alert" v-show="loggedIn">
        Loggin successful, Redirecting...
      </div>

      <form action="#" id="login-form" class="login-form">
        <div class="form-group">
          <input
            type="text"
            class="form-control rounded-left"
            placeholder="Email"
            required
            name="email"
            v-model="user.email"
          />
        </div>
        <div class="form-group d-flex">
          <input
            type="password"
            class="form-control rounded-left"
            placeholder="Password"
            required
            name="password"
            v-model="user.password"
          />
        </div>

        <div class="form-group">
          <span
            id="login"
            type="submit"
            class="btn btn-primary rounded submit p-3 px-5"
            @click="login"
          >
            Login
          </span>
        </div>
      </form>
    </div>
  </v-layout>
</template>

<script>
/* ============
 * Login Index Page
 * ============
 *
 * Page where the user can login.
 */

import VLayout from "@/layouts/Auth.vue";
import VCard from "@/components/Card.vue";

export default {
  /**
   * The name of the page.
   */
  name: "Login",

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
        email: "",
        password: "",
      },
      loggedIn: false,
    };
  },

  methods: {
    async login() {
      if (this.user.email.trim() === "" || this.user.password.trim() === "")
        return false;
      try {
        const result = await this.$http.post("/login", this.user);

        if (result.token) {
          localStorage.setItem("todo-token", result.token);
          this.loggedIn = true;
          setTimeout(() => {
            this.$router.push("/");
          }, 1500);
        } else {
          alert("Cannot get token login");
          console.log("Cannot get token login");
        }
      } catch (err) {
        console.log(err.error);
        alert(err.error);
      }
    },
  },
};
</script>
