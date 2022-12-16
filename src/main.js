import Vue from "vue";

import "./plugins/axios";
import { router } from "./plugins/vue-router";
import "./plugins/bootstrap";
import "./plugins/font-awesome";

import "./assets/stylus/app.styl";

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app",

  router,

  render: h => h(App)
});
