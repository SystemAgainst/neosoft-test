import type { Task } from '@/shared/types/task';


let tasks: Task[] = [
  { id: 1, title: 'Первое дело', completed: false },
  { id: 2, title: 'Второе дело', completed: true }
];

const delay = (ms = 500) => new Promise(res => setTimeout(res, ms));

export const tasksApi = {
  async getAll() {
    await delay();
    return [...tasks];
  },
  async add(title: string) {
    await delay();
    const task = { id: Date.now(), title, completed: false };
    tasks.push(task);
    return task;
  },
  async remove(id: number) {
    await delay();
    tasks = tasks.filter(t => t.id !== id);
  },
  async toggle(id: number) {
    await delay();
    const task = tasks.find(t => t.id === id);

    if (task) task.completed = !task.completed;

    return task;
  },
};
