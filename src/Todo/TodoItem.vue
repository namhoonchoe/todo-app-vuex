<template>
  <div>
    <div class="todo" :class="{ 'completed': todo.completed }" v-show="!isEdit">
      <button class="checkbox icon" @click="toggleCompleted">
        <i class="material-icons">{{ todo.completed ? 'check_box' : 'check_box_outline_blank' }}</i>
      </button>
      
      <span class="todo-title">{{ todo.title }}</span>
      
      <button class="edit icon" @click="toggleEdit">
        <i class="material-icons">edit</i>
      </button>
      <button class="delete icon" @click="removeTodo">
        <i class="material-icons">delete</i>
      </button>
    </div>

    <form class="todo-form" v-show="isEdit" @submit.prevent="handlerSave">
      <input type="text" v-model="title" required>
      <button class="icon" type="submit">
        <i class="material-icons">save</i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object
    },
    index: {
      type: Number
    }
  },

  data() {
    return {
      isEdit: false,
      title: this.todo.title
    };
  },

  methods: {
    toggleEdit() {
      this.isEdit = !this.isEdit;
    },

    toggleCompleted() {
      const payload = {
        index: this.index,
        completed: !this.todo.completed
      };
      this.$store.dispatch("changeTodo", payload);
    },

    handlerSave() {
      this.toggleEdit();
      const payload = {
        index: this.index,
        title: this.title
      };
      this.$store.dispatch("changeTodo", payload);
    },
    removeTodo() {
      this.$store.dispatch("removeTodo", this.index);
    }
  },

  created() {}
};
</script>