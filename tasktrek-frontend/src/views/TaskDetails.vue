<template>
    <div class="task-details" v-if="task">
      <h1>{{ task.title }}</h1>
      <p>{{ task.description }}</p>
      <p>Status: {{ task.status }}</p>
      <router-link :to="'/dashboard'">Back to Dashboard</router-link>
    </div>
    <div v-else>
      <p>Loading task details...</p>
    </div>
  </template>
  
  <script>
  import { useTaskStore } from '../stores/tasks';
  
  export default {
    name: 'TaskDetails',
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        task: null,
      };
    },
    created() {
      const taskStore = useTaskStore();
      taskStore.fetchTask(this.id).then(() => {
        this.task = taskStore.task;
      });
    },
  };
  </script>
  
  <style scoped>
  .task-details {
    padding: 20px;
  }
  </style>
  