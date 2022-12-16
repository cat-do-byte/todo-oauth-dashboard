/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Home
  {
    path: "/home",
    name: "home.index",
    component: () => import("@/views/Home/Index.vue"),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },
  {
    path: "/todo",
    name: "todo",
    component: () => import("@/views/Todo.vue"),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Account
  {
    path: "/account",
    name: "account.index",
    component: () => import("@/views/Account/Index.vue"),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Login
  {
    path: "/login",
    name: "login.index",
    component: () => import("@/views/Auth/Login.vue"),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: "/register",
    name: "register.index",
    component: () => import("@/views/Auth/Register.vue"),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  {
    path: "/",
    redirect: "/home",
  },

  {
    path: "/*",
    redirect: "/home",
  },
];
