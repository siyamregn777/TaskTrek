<template>
  <div class="homeAll">
    <!-- Image container for the carousel effect -->
    <div class="image-carousel">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :class="{ active: currentImage === index }"
        alt="Background Image"
      />
    </div>
    <div class="home">
      <h1>Welcome to TaskTrek</h1>
      <p>Your ultimate project management tool</p>
      <router-link to="/dashboard" class="btn">Go to Dashboard</router-link>
      <p class="description">
        Manage your tasks and projects efficiently with our user-friendly platform.
        Get started today and take your project management to the next level!
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const images = [
  new URL('../assets/pexels-leeloothefirst-5408918.jpg', import.meta.url).href,
  new URL('../assets/pexels-olia-danilevich-5313175.jpg', import.meta.url).href,
  new URL('../assets/pexels-olly-3860805.jpg', import.meta.url).href,
  new URL('../assets/pexels-sarah-chai-7282833.jpg', import.meta.url).href,
  new URL('../assets/pexels-shvets-production-9052846.jpg', import.meta.url).href,
  new URL('../assets/pexels-yankrukov-7691727.jpg', import.meta.url).href,
  new URL('../assets/pexels-yankrukov-7693241.jpg', import.meta.url).href,
  new URL('../assets/pexels-yankrukov-7792806.jpg', import.meta.url).href,

];

const currentImage = ref(0); // Track the current image index

// Function to change the image every 5 seconds
let interval;
const startCarousel = () => {
  interval = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % images.length;
  }, 3000); // Change image every 5 seconds
};

// Start the carousel when the component mounts
onMounted(() => {
  startCarousel();
});

// Clear the interval when the component unmounts
onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.homeAll {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  color: white; /* Text color */
  position: relative;
  overflow: hidden; /* Ensure the carousel doesn't overflow */
}

.image-carousel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Place the carousel behind the content */
}

.image-carousel img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire area */
  opacity: 0; /* Hide all images by default */
  transition: opacity 1s ease-in-out; /* Smooth transition */
}

.image-carousel img.active {
  opacity: 1; /* Show the active image */
}

.home {
  text-align: center;
  padding: 30px;
  background: rgba(0, 0, 0, 0.05); /* Semi-transparent background for text visibility */
  border-radius: 8px;
  max-width: 80%;
  color: white;
  z-index: 10; /* Ensure the content is above the carousel */
  position: relative; /* Ensure it stays above the carousel */
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  font-size: 1.25rem;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  padding: 15px 30px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

.description {
  font-size: 1.1rem;
  margin-top: 20px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .home {
    max-width: 90%;
    padding: 20px;
  }

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.1rem;
  }
}
</style>