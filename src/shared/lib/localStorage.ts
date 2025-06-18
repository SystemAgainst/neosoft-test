import type { Task } from '@/shared/types/task.ts'

const TASKS_KEY = 'MY_TASKS';

export const saveTasksToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

export const loadTasksFromLocalStorage = (): Task[] => {
  const data = localStorage.getItem(TASKS_KEY);
  return data ? JSON.parse(data) : [];
};
