<template>
  <section class="todo-filter">
    <button type="button" :class="{'is-active': activeTab('total')}" @click="changeFilter('total')">
      <i class="material-icons">list</i>
      <span>Total</span>
      &nbsp;
      <span class="count">{{ countTotal }}</span>
    </button>
    
    <button
      type="button"
      :class="{'is-active': activeTab('completed')}"
      @click="changeFilter('completed')"
    >
      <i class="material-icons">check_box</i>
      <span>completed</span>
      &nbsp;
      <span class="count">{{ countCompleted }}</span>
    </button>
    
    <button
      type="button"
      :class="{'is-active': activeTab('not-completed')}"
      @click="changeFilter('not-completed')"
    >
      <i class="material-icons">check_box_outline_blank</i>
      <span>not completed</span>
      &nbsp;
      <span class="count">{{ countNotCompleted }}</span>
    </button>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "todo-filter",

  methods: {
    changeFilter(filterType) {
      this.$store.dispatch("changeFilter", filterType);
    }
  },

  computed: {
    ...mapGetters([
      "activeTab",
      "countTotal",
      "countCompleted",
      "countNotCompleted"
    ])
  }
};
</script>

