<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header"> </span>
      <div slot="body">
        <p class="text-center text-uppercase font-weight-bold">
          Todo OAuth 2 Server
        </p>
        <p>
          Access <span class="badge badge-info">Todo</span> page to manage your
          todos <i>( for user )</i>
        </p>
        <p>
          Access <span class="badge badge-info">App (Client)</span> page to
          manage Credentials key <i>( for client )</i>
        </p>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
import VLayout from "@/layouts/Default.vue";
import VCard from "@/components/Card.vue";

export default {
  /**
   * The name of the page.
   */
  name: "HomeIndex",

  /**
   * The components that the page can use.
   */
  components: {
    VLayout,
    VCard,
  },
};
</script>
