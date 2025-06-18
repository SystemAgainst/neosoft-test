import { Module } from 'vuex';
import type { Task } from '@/shared/types/task';
import { type TaskFilter, TASKS_FILTERS } from '@/entities/task/model/taskFilterTypes.ts'


export interface TaskState {
  tasks: Task[];
  filter: TaskFilter;
}

export const taskModule: Module<TaskState, any> = {
  namespaced: true,
  state: () => ({
    tasks: [],
    filter: TASKS_FILTERS.ALL,
  }),
  mutations: {},
  actions: {},
  getters: {}
};
