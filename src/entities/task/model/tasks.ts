import type { Module } from 'vuex';
import type { Task } from '@/shared/types/task';
import type { RootState } from '@/app/store/types.ts';
import { TASKS_FILTERS, type TaskFilter } from './taskFilterTypes';
import { tasksApi } from '../api/tasksApi';
import {
  saveTasksToLocalStorage,
  loadTasksFromLocalStorage,
} from '@/shared/lib/localStorage';


export interface TaskState {
  tasks: Task[];
  filter: TaskFilter;
}

export const tasksModule: Module<TaskState, RootState> = {
  namespaced: true,
  state: () => ({
    tasks: loadTasksFromLocalStorage(),
    filter: TASKS_FILTERS.ALL,
  }),
  mutations: {
    addTask(state, task: Task) {
      state.tasks.push(task);
      saveTasksToLocalStorage(state.tasks);
    },
    toggleTask(state, id: number) {
      const task = state.tasks.find(t => t.id === id);
      if (task) {
        task.completed = !task.completed;
        saveTasksToLocalStorage(state.tasks);
      }
    },
    removeTask(state, id: number) {
      state.tasks = state.tasks.filter(t => t.id !== id);
      saveTasksToLocalStorage(state.tasks);
    },
    setFilter(state, filter: TaskFilter) {
      state.filter = filter;
    },
  },
  actions: {
    async addTask({ commit }, title: string) {
      const task = await tasksApi.add(title);
      commit('addTask', task);
    },
    toggleTask({ commit }, id: string) {
      commit('toggleTask', id);
    },
    removeTask({ commit }, id: string) {
      commit('removeTask', id);
    },
    changeFilter({ commit }, filter: TaskFilter) {
      commit('setFilter', filter);
    },
  },
  getters: {
    filteredTasks(state) {
      switch (state.filter) {
        case TASKS_FILTERS.ACTIVE:
          return state.tasks.filter(t => !t.completed);
        case TASKS_FILTERS.COMPLETED:
          return state.tasks.filter(t => t.completed);
        default:
          return state.tasks;
      }
    },
  },
};
