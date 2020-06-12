import Vue from "vue";
import Vuex from "vuex";

import { Todo, saveStorage, defaultState } from "./defaultState";

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [saveStorage],
  state: {
    todos: defaultState,
    filterType: "total"
  },

  getters: {
    todos(state) {
      switch (state.filterType) {
        case "not-completed":
          return state.todos.filter(todo => !todo.completed);
        case "completed":
          return state.todos.filter(todo => todo.completed);
        default:
          return state.todos;
      }
    },

    countTotal(state) {
      return state.todos.length;
    },

    countCompleted(state) {
      return state.todos.filter(todo => todo.completed).length;
    },

    countNotCompleted(state) {
      return state.todos.filter(todo => !todo.completed).length;
    },

    activeTab: state => filterType => state.filterType === filterType
  },

  mutations: {
    SET_CHANGE_TODO(state, payload) {
      const { index, ...rest } = payload;
      const todo = {
        ...state.todos[index],
        ...rest
      };
      Vue.set(state.todos, index, todo);
    },
    REMOVE_TODO(state, index) {
      Vue.delete(state.todos, index);
    },
    ADD_TODO(state, title) {
      const todo = new Todo({ title });
      state.todos.push(todo);
    },
    SET_FILTER(state, type) {
      state.filterType = type;
    }
  },

  actions: {
    changeTodo({ commit }, payload) {
      commit("SET_CHANGE_TODO", payload);
    },
    addTodo({ commit }, title) {
      commit("ADD_TODO", title);
    },
    removeTodo({ commit }, index) {
      commit("REMOVE_TODO", index);
    },
    changeFilter({ commit }, type) {
      commit("SET_FILTER", type);
    }
  }
});
