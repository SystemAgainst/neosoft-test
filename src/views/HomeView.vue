<script setup lang="ts">
import AddTaskForm from '@/features/add-task/AddTaskForm.vue';
import TaskList from '@/widgets/TaskList.vue';
import TaskFilters from '@/entities/task/ui/TaskFilters.vue'
</script>

<template>
  <main class="home">
    <AddTaskForm />
    <TaskFilters />
    <TaskList />
  </main>
</template>

<style scoped>
.home {
  max-width: 600px;
  margin: 0 auto;
  padding: 32px;
}
</style>
