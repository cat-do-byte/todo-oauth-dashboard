<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header"> App ( ClientID ) </span>
      <div slot="body">
        <ul class="list-group" v-if="clients.length > 0">
          <li
            class="
              list-group-item list-group-item-action
              flex-column
              align-items-start
            "
            v-for="client in clients"
            :key="client.id"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{ client.name }}</h5>
              <!-- <small>3 days ago</small> -->
            </div>
            <small><b>Client ID : </b>{{ client.clientId }}</small>

            <br />
            <small><b>Client Secret : </b>{{ client.clientSecret }}</small>
          </li>
        </ul>
        <blockquote class="blockquote text-center" v-else>
          <p class="mb-0">You dont have app. Create one</p>
        </blockquote>
      </div>
      <div slot="footer">
        <div class="row">
          <div class="col col-9">
            <input
              type="text"
              class="form-control"
              placeholder="Your App Name"
              name="task"
              v-model="client"
            />
            <br />
            <input
              type="text"
              class="form-control"
              placeholder="Callback URI"
              name="redirectUris"
              v-model="redirectUris"
            />
          </div>
          <div class="col col-3">
            <span class="btn btn-block btn-primary" @click="createClient"
              >Create</span
            >
          </div>
        </div>
      </div>
    </v-card>
  </v-layout>
</template>
    
    <script>
import VLayout from "@/layouts/Default.vue";
import VCard from "@/components/Card.vue";

export default {
  name: "Client",

  components: {
    VLayout,
    VCard,
  },
  data() {
    return {
      client: "",
      redirectUris: "",
      clients: [],
    };
  },
  methods: {
    async createClient() {
      if (this.client.trim() === "" || this.redirectUris.trim() === "") {
        return false;
      }
      const newClientApp = await this.$http.post("/clients", {
        name: this.client,
        redirectUris: [this.redirectUris],
      });
      this.clients.push(newClientApp);

      this.client = "";
    },
  },
  async mounted() {
    try {
      const data = await this.$http.get("/clients");
      this.clients = data;
    } catch (err) {
      alert(
        "Error: " +
          err.error +
          " ( try clear todo-token in localStorage if error about authenticate)"
      );
    }
  },
};
</script>
    