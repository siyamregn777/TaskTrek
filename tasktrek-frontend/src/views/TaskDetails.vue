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
  
  <script setup>
  // import { useTaskStore } from '../stores/tasks';
  

  </script>
  
  <style scoped>
  .task-details {
    padding: 20px;
  }
  </style>
  