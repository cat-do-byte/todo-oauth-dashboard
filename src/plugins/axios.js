/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */

import Vue from "vue";
import Axios from "axios";

Axios.defaults.baseURL = process.env.VUE_APP_API_LOCATION;
Axios.defaults.headers.common.Accept = "application/json";

Axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("todo-token");
  if (token) config.headers.authorization = `Bearer ${token}`;

  return config;
});

Axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.log("error:::", error.response);
    if (error.response.status === 401) {
    }

    return Promise.reject(error.response.data);
  }
);

// Bind Axios to Vue.
Vue.$http = Axios;
Object.defineProperty(Vue.prototype, "$http", {
  get() {
    return Axios;
  },
});
