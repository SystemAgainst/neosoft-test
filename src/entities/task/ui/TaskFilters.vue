<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { type TaskFilter, TASKS_FILTERS } from '@/entities/task/model/taskFilterTypes';

const route = useRoute();
const router = useRouter();

const filterOptions: Record<TaskFilter, string> = {
  [TASKS_FILTERS.ALL]: 'Все',
  [TASKS_FILTERS.ACTIVE]: 'Активные',
  [TASKS_FILTERS.COMPLETED]: 'Выполненные',
};

const currentFilter = computed<TaskFilter>(() => {
  const q = route.query.filter;
  return (
    typeof q === 'string' && Object.values(TASKS_FILTERS).includes(q as TaskFilter)
      ? (q as TaskFilter)
      : TASKS_FILTERS.ALL
  );
});

const onChange = (value: TaskFilter) => {
  router.push({ query: { ...route.query, filter: value } });
};
</script>

<template>
  <div class="filters">
    <button
      v-for="(label, value) in filterOptions"
      :key="value"
      :class="{ active: currentFilter === value }"
      @click="onChange(value)"
    >
      {{ label }}
    </button>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 16px 0;
}

.filters button {
  padding: 6px 14px;
  background-color: transparent;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  color: var(--color-text);
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.filters button:hover {
  background-color: var(--color-border-hover);
}

.filters button.active {
  background-color: #2ecc71;
  color: white;
  border-color: #2ecc71;
}
</style>
