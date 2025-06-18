import type { Module } from 'vuex';
import type { Task } from '@/shared/types/task';
import { type TaskFilter, TASKS_FILTERS } from '@/entities/task/model/taskFilterTypes.ts';
import type { RootState } from '@/app/store/types.ts';
import { tasksApi } from '@/entities/task/api/tasksApi.ts'


export interface TaskState {
  tasks: Task[];
  filter: TaskFilter;
}

export const tasksModule: Module<TaskState, RootState> = {
  namespaced: true,
  state: () => ({
    tasks: [],
    filter: TASKS_FILTERS.ALL,
  }),
  mutations: {
    addTask(state, task: Task) {
      state.tasks.push(task)
    },
    setFilter(state, filter: TaskFilter) {
      state.filter = filter
    },
    toggleTask(state, taskId: number) {
      const task = state.tasks.find(t => t.id === taskId)
      if (task) task.completed = !task.completed
    },
  },
  actions: {
    async addTask({ commit }, title: string) {
      const task = await tasksApi.add(title)
      commit('addTask', task)
    },
    changeFilter({ commit }, filter: TaskFilter) {
      commit('setFilter', filter)
    },
    toggleTask({ commit }, taskId: number) {
      commit('toggleTask', taskId)
    },
  },
  getters: {
    filteredTasks(state) {
      switch (state.filter) {
        case 'active':
          return state.tasks.filter(t => !t.completed)
        case 'completed':
          return state.tasks.filter(t => t.completed)
        default:
          return state.tasks
      }
    },
  },
};
