<template>
  <div class="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full height of the viewport */
}
</style>
