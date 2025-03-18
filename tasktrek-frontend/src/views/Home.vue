<template>
    <div class="home">
      <h1>Welcome to TaskTrek</h1>
      <p>Your project management tool.</p>
      <router-link to="/dashboard">Go to Dashboard</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 20px;
  }
  </style>
  