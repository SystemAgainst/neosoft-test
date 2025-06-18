<script setup lang="ts">
import { computed, watch } from 'vue'
import { useStore } from '@/app/store/hooks';
import TaskItem from '@/entities/task/ui/TaskItem.vue';
import type { Task } from '@/shared/types/task';
import { useRoute } from 'vue-router'
import { type TaskFilter, TASKS_FILTERS } from '@/entities/task/model/taskFilterTypes.ts'

const store = useStore();
const route = useRoute();

const tasks = computed(() => store.getters['tasks/filteredTasks']);

const onToggle = (task: Task) => {
  store.dispatch('tasks/toggleTask', task.id)
};

const onRemove = (task: Task) => {
  store.dispatch('tasks/removeTask', task.id)
};

watch(
  () => route.query.filter,
  (filter) => {
    const f = filter as TaskFilter;
    if (Object.values(TASKS_FILTERS).includes(f)) {
      store.dispatch('tasks/changeFilter', f);
    } else {
      store.dispatch('tasks/changeFilter', TASKS_FILTERS.ALL);
    }
  },
  { immediate: true }
);</script>

<template>
  <ul class="task-list">

    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="onToggle"
      @remove="onRemove"
    />
  </ul>
</template>

<style scoped>
.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
