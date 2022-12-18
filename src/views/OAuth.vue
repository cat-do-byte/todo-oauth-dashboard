<template>
  <section class="pt-5 pb-5">
    <div class="container">
      <div class="row d-flex">
        <div class="col-12 col-md-4 mb-4 mt-2 offset-md-4">
          <div class="card h-100 border-light bg-light shadow">
            <div class="card-body d-flex-row">
              <blockquote class="blockquote mb-4 pb-2">
                <p class="mb-0 font-weight-bold">App {{ client.name }}</p>
                <footer class="blockquote-footer">
                  Want to access your account with permission :
                </footer>
              </blockquote>
              <p class="card-text mb-5">+ Read</p>
              <div class="w-100 pb-1"></div>
              <div class="d-flex align-items-center align-self-end">
                <div class="m-2">
                  <a href="#">Cancel</a>
                </div>
                <div class="meta-item ml-auto">
                  <form :action="confirmUrl" method="POST">
                    <input type="hidden" name="authorization" v-model="token" />
                    <input
                      type="submit"
                      class="btn btn-primary"
                      value="Allow"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
/* ============
 * Login Index Page
 * ============
 *
 * Page where the user can login.
 */

import VLayout from "@/layouts/Minimal.vue";
import VCard from "@/components/Card.vue";

export default {
  /**
   * The name of the page.
   */
  name: "OAuth",

  /**
   * The components the page can use.
   */
  components: {
    VLayout,
    VCard,
  },
  data() {
    return {
      confirmUrl: "",
      client: {
        name: "",
        callback: "",
      },
      token: "Bearer " + localStorage.getItem("todo-token"),
    };
  },

  methods: {
    async confirm() {
      const result = await this.$http.post(this.confirmUrl);
    },
  },
  async mounted() {
    const appServer = process.env.VUE_APP_API_LOCATION;
    // fetch client App info
    const route = this.$route.query;
    const { clientId } = route;
    if (!clientId) {
      alert("Not found clientId at url. Redirect back...");
      window.history.back();
    }

    // redirect if not login
    const currentUserToken = localStorage.getItem("todo-token");
    if (!currentUserToken) {
      this.$router.push("/login?redirect=" + this.$route.fullPath);
      return false;
    }

    try {
      const result = await this.$http.post("/clients/get-client", { clientId });
      this.client.name = result.name;
      this.client.callback = result.redirectUris[0];
      this.confirmUrl = `${appServer}/oauth/accept?client_id=${clientId}&state=state123&access_type=offline&response_type=code&scope=todo.read,todo.create`;
    } catch (err) {
      console.log(err.error);
      alert("Can not verify clientID");
    }
  },
};
</script>
  