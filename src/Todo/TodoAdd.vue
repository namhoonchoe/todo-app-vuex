<template>
  <form class="todo-form" @submit.prevent="addTodo">
    <input type="text" v-model="title" required>
    <button class="icon" type="submit">
      <i class="material-icons">add</i>
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(event) {
      this.$store.dispatch("addTodo", this.title);
      event.currentTarget.reset();
    }
  }
};
</script>

