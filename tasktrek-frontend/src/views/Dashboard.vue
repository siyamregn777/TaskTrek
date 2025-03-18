<template>
    <div class="dashboard">
      <h1>Your Dashboard</h1>
      <div v-if="tasks.length">
        <ul>
          <li v-for="task in tasks" :key="task.id">
            <router-link :to="'/tasks/' + task.id">{{ task.title }}</router-link>
          </li>
        </ul>
      </div>
      <p v-else>No tasks available. Add some tasks!</p>
    </div>
  </template>
  
  <script>
  import { useTaskStore } from '../stores/tasks';
  
  export default {
    name: 'Dashboard',
    computed: {
      tasks() {
        return this.$store.tasks;
      },
    },
    created() {
      const taskStore = useTaskStore();
      taskStore.fetchTasks();
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    text-align: center;
    padding: 20px;
  }
  </style>
  