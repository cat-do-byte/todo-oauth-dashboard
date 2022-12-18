<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link :to="{ name: 'home.index' }" class="navbar-brand">
        Todo Dashboard
      </router-link>

      <button class="navbar-toggler" type="button" @click="toggleMenu">
        <span class="navbar-toggler-icon" />
      </button>

      <div :class="{ show: menuCollapsed }" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link
            :to="{ name: 'home.index' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a class="nav-link"> Home </a>
          </router-link>
          <router-link
            v-show="isLoggedIn"
            :to="{ name: 'todo' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a class="nav-link"> Todo </a>
          </router-link>
          <router-link
            v-show="isLoggedIn"
            :to="{ name: 'client' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a class="nav-link"> App (ClientID) </a>
          </router-link>

          <router-link
            v-show="!isLoggedIn"
            :to="{ name: 'login' }"
            class="nav-item"
            tag="li"
          >
            <a class="nav-link"> Login </a>
          </router-link>

          <router-link
            v-show="!isLoggedIn"
            :to="{ name: 'register' }"
            class="nav-item"
            tag="li"
          >
            <a class="nav-link"> Register </a>
          </router-link>
        </ul>
        <!-- <span class="navbar-text">
          <a class="nav-link" v-show="!isLoggedIn" href="/login"> Login </a>
          <a class="nav-link" v-show="!isLoggedIn" href="/register">
            Register
          </a>
        </span> -->
      </div>
    </nav>

    <div class="container pt-4">
      <div class="row">
        <div class="col col-12">
          <!-- Content will be placed here -->
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* ============
 * Default Layout
 * ============
 *
 * Used for the home and account pages.
 *
 * Layouts are used to store a lot of shared code.
 * This way the app stays clean.
 */

export default {
  /**
   * The name of the layout.
   */
  name: "DefaultLayout",

  /**
   * The data that can be used by the page.
   *
   * @returns {Object} The view-model data.
   */
  data() {
    return {
      menuCollapsed: false,
      isLoggedIn: localStorage.getItem("todo-token") !== null,
    };
  },

  /**
   * The methods that the layout can use.
   */
  methods: {
    toggleMenu() {
      this.menuCollapsed = !this.menuCollapsed;
    },
  },
};
</script>
<style scoped>
.bg-dark {
  background: #8d448b !important;
}
</style>