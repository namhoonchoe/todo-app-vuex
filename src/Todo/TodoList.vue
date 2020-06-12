<template>
  <section class="todo-list">
    <TodoItem v-for="(todo, index) in todos" :key="todo.id" :todo="todo" :index="index"/>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem";

export default {
  name: "todo-list",
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters(["todos"])
  }
};
</script>