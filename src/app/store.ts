import { createStore } from "vuex";

export const store = createStore({
  modules: {
    tasks: tasksModule
  }
})

