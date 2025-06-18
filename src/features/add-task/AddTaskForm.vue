<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '@/app/store/hooks';

const store = useStore();
const title = ref('');

const handleSubmit = () => {
  const trimmedTitle = title.value.trim()

  if (!trimmedTitle) return;

  store.dispatch('tasks/addTask', trimmedTitle);
  title.value = '';
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="add-task-form">
    <input
      v-model="title"
      type="text"
      placeholder="Введите задачу"
      class="add-task-input"
    />
    <button type="submit" class="add-task-button">Добавить</button>
  </form>
</template>

<style scoped>
.add-task-form {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.add-task-input {
  flex: 1;
  padding: 8px;
  font-size: 14px;
}

.add-task-button {
  padding: 8px 16px;
  font-size: 14px;
  background: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
