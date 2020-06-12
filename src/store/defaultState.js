class Todo {
  constructor({ title = "", completed = false }) {
    this.title = title;
    this.id = Date.now() + Math.random();
    this.completed = completed;
  }
}
let todos = window.localStorage.getItem("todos");

let defaultState = todos
  ? JSON.parse(todos)
  : [
      new Todo({ title: "JavaScript", completed: true }),
      new Todo({ title: "Vue.js", completed: true }),
      new Todo({ title: "Vuex" })
    ];

const saveStorage = store => {
  store.subscribe((mutation, state) => {
    window.localStorage.setItem("todos", JSON.stringify(state.todos));
  });
};

export { Todo, defaultState, saveStorage };
