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
    },
    toggleTask(state, id: number) {
      const task = state.tasks.find(t => t.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask(state, id: number) {
      state.tasks = state.tasks.filter(t => t.id !== id);
    },
    setFilter(state, filter: TaskFilter) {
      state.filter = filter;
    },
  },
  actions: {
    async addTask({ commit, state }, title: string) {
      const task = await tasksApi.add(title);
      commit('addTask', task);
      saveTasksToLocalStorage(state.tasks);
    },
    toggleTask({ commit, state }, id: string) {
      commit('toggleTask', id);
      saveTasksToLocalStorage(state.tasks);
    },
    removeTask({ commit, state }, id: string) {
      commit('removeTask', id);
      saveTasksToLocalStorage(state.tasks);
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
