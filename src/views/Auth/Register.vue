<template>
  <v-layout>
    <span slot="header"> Register </span>
    <div slot>
      <div class="alert alert-success" fade role="alert" v-show="createdAcc">
        Created a account. Redirecting...
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
            @click="register"
          >
            Register
          </span>
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
      createdAcc: false,
      user: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async register() {
      if (this.user.email.trim() === "" || this.user.password.trim() === "")
        return false;
      try {
        const result = await this.$http.post("/register", this.user);
        this.createdAcc = true;
        setTimeout(() => {
          this.$router.push("login");
        }, 1500);
      } catch (err) {
        console.log(err);
        alert("Can not create Account");
      }
    },
  },
};
</script>
