import type { TaskState } from '@/entities/task/model/tasks.ts'

export interface RootState {
  tasks: TaskState,
}
