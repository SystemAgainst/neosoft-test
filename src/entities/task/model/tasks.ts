import type { Module } from 'vuex';
import type { Task } from '@/shared/types/task';
import { type TaskFilter, TASKS_FILTERS } from '@/entities/task/model/taskFilterTypes.ts';
import type { RootState } from '@/app/store/types.ts';


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
  mutations: {},
  actions: {},
  getters: {}
};
