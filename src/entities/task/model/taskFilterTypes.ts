import type { ValueOf } from '@/shared/types/utils.ts';


export const TASKS_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const;

export type TaskFilter = ValueOf<typeof TASKS_FILTERS>;
