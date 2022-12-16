<template>
  <v-layout>
    <v-card contextual-style="dark">
      <span slot="header"> My Account </span>
      <div slot="body">
        <ul class="list-group" v-if="todos.length > 0">
          <li
            class="
              list-group-item
              d-flex
              justify-content-between
              align-items-center
            "
            v-for="todo in todos"
            :key="todo.id"
          >
            {{ todo.content }}
            <span
              style="cursor: pointer"
              class="badge badge-danger badge-pill"
              @click="deleteTodo(todo.id)"
              >X</span
            >
          </li>
        </ul>
        <blockquote class="blockquote text-center" v-else>
          <p class="mb-0">You dont have todo. Create one</p>
        </blockquote>
      </div>
      <div slot="footer">
        <div class="row">
          <div class="col col-9">
            <input
              type="text"
              class="form-control"
              placeholder="Your Task"
              name="task"
              v-model="todo"
            />
          </div>
          <div class="col col-3">
            <span class="btn btn-block btn-success" @click="createTodo"
              >Add</span
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
  name: "Todo",

  components: {
    VLayout,
    VCard,
  },
  data() {
    return {
      todo: "",
      todos: [],
    };
  },
  methods: {
    async createTodo() {
      if (this.todo.trim() === "") {
        alert("Todo content can not be empty");
        return false;
      }
      const newTodo = await this.$http.post("/todo", { content: this.todo });
      this.todos.push(newTodo);

      this.todo = "";
    },
    async deleteTodo(id) {
      try {
        const deleted = await this.$http.delete(`/todo/${id}`);
        this.todos = this.todos.filter((todo) => todo.id !== id);
      } catch (err) {}
    },
  },
  async mounted() {
    try {
      const data = await this.$http.get("/todo");
      this.todos = data;
    } catch (err) {
      alert(err.error);
    }
  },
};
</script>
  