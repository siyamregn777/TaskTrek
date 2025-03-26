<template>
  <nav>
    <!-- Logo Image and Text -->
    <router-link to="/" class="logo-container">
      <img class="logo" src="https://img.icons8.com/?size=100&id=YLknu2EtnkIp&format=png&color=000000" alt="TaskTrek Logo" />
      <span class="logo-text">TaskTrek</span>
    </router-link>

    <!-- Navigation Links -->
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/dashboard">Dashboard</router-link>

      <!-- Dropdown for Login and Register -->
      <div class="dropdown" v-click-outside="hideDropdown" @click="toggleDropdown">
        <img src="../assets/pexels-yankrukov-7640777.png" alt="User Menu"  />
        <div v-if="showDropdown" class="dropdown-menu">
          <router-link to="/profile">Profile</router-link>
          <router-link to="/login" class="dropdown-toggle">Login</router-link>
          <router-link to="/register">Register</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

// Dropdown visibility state
const showDropdown = ref(false);

// Toggle dropdown on image click
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

// Hide dropdown when clicking outside
const hideDropdown = () => {
  showDropdown.value = false;
};

// v-click-outside directive
const vClickOutside = {
  beforeMount(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el) {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center; /* Vertically center the items */
  justify-content: space-between; /* Space out the logo and links */
  padding: 15px 30px; /* More space for a cleaner look */
  background-color: #2c3e50; /* Darker shade for a modern look */
  color: white;
}

/* Logo container */
.logo-container {
  display: flex;
  align-items: center; /* Align image and text vertically */
  gap: 10px; /* Space between image and text */
  text-decoration: none; /* Remove underline */
}

/* Logo image */
.logo {
  width: 40px;
  height: 40px; /* Make the logo square */
  object-fit: contain; /* Maintain aspect ratio without distortion */
}

/* Logo text */
.logo-text {
  font-size: 20px;
  font-weight: bold;
  color: white; /* Ensure text is visible */
}

/* Style for navigation links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 15px; /* Space between links */
}

nav a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  padding: 8px 12px; /* Add padding for clickable area */
  border-radius: 4px; /* Slight rounded corners */
  transition: background-color 0.3s ease; /* Smooth hover transition */
}

/* Hover effect for links */
nav a:hover {
  background-color: #31dbc4; /* Subtle hover effect */
}

/* Dropdown styling */
.dropdown {
  position: relative;
  cursor: pointer;
   /* Indicate that the image is clickable */
}

.dropdown img {
  width: 25px;
  height: 25px;
  object-fit: contain;
  border-radius: 50%;

}

.dropdown-menu {
  position: absolute;
  top: 100%; /* Position below the image */
  right: 0; /* Align to the right edge of the dropdown */
  background-color: #2c3e50; /* Match the nav background */
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10; /* Ensure it appears above other elements */
  min-width: 120px; /* Set a minimum width for the dropdown */
}

.dropdown-menu a {
  display: block;
  padding: 8px 12px;
  white-space: nowrap; /* Prevent text wrapping */
  color: white; /* Ensure text is visible */
  text-decoration: none; /* Remove underline */
}

.dropdown-menu a:hover {
  background-color: #31dbc4; /* Hover effect for dropdown items */
}

/* Responsive behavior for smaller screens */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px; /* Adjust spacing for vertical layout */
  }

  .dropdown-menu {
    position: static; /* Dropdown menu stacks vertically on mobile */
    box-shadow: none;
  }
}
</style>