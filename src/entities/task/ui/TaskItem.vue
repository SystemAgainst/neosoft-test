<script setup lang="ts">
import type { Task } from '@/shared/types/task'

const props = defineProps<{
  task: Task
}>()

const emit = defineEmits<{
  (e: 'toggle', task: Task): void
  (e: 'remove', task: Task): void
}>()

const onToggle = () => emit('toggle', props.task)
const onRemove = () => emit('remove', props.task)
</script>


<template>
  <li class="task-item">
    <label class="task-label">
      <input
        type="checkbox"
        :checked="props.task.completed"
        @change="onToggle"
      />
      <span :class="{ completed: props.task.completed }">
        {{ props.task.title }}
      </span>
    </label>

    <button class="remove-button" @click="onRemove">
      x
    </button>
  </li>
</template>

<style scoped>
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s;
}

.task-label {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-text);
  flex: 1;
  overflow: hidden;
}

.task-label input[type='checkbox'] {
  width: 18px;
  height: 18px;
  accent-color: #2ecc71;
  cursor: pointer;
}

.task-label span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
}

.task-label span.completed {
  text-decoration: line-through;
  color: #888;
}

.remove-button {
  background: transparent;
  border: none;
  font-size: 16px;
  color: #ff4d4f;
  cursor: pointer;
  padding: 2px 6px;
  transition: transform 0.1s ease-in-out;
}

.remove-button:hover {
  transform: scale(1.2);
}
</style>
