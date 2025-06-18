import { createStore } from "vuex";
import type { RootState } from '@/app/store/types.ts';
import { tasksModule } from '@/entities/task/model/tasks.ts';


export const store = createStore<RootState>({
  modules: {
    tasks: tasksModule,
  },
});
