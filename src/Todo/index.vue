<template>
  <section class="todo-wrapper">
    <header>
      <h1>Vuex-Todo</h1>
    </header>
    <TodoFilters/>
    <TodoList/>
    <footer>
      <TodoAdd/>
    </footer>
  </section>
</template>

<script>
import TodoFilters from "./TodoFilters";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
export default {
  name: "filters",
  components: {
    TodoFilters,
    TodoList,
    TodoAdd
  }
};
</script>