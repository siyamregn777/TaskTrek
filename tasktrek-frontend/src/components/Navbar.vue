<template>
  <nav>
    <!-- Logo Image -->
   <router-link to="/" ><img class="logo" src="https://img.icons8.com/?size=100&id=YLknu2EtnkIp&format=png&color=000000" alt="TaskTrek Logo" />
   </router-link>
    <!-- Navigation Links -->
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/profile">Profile</router-link>
  </nav>
</template>

<script setup>
// No need for export default, simply leave the <script setup> as is
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
  
  /* Logo styling */
  .logo {
    width: 40px;
    height: 40px; /* Make the logo square */
    object-fit: contain; /* Maintain aspect ratio without distortion */
  }

  /* Style for navigation links */
  nav a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    margin: 0 15px; /* Adjust space between links */
    padding: 8px 12px; /* Add padding for clickable area */
    border-radius: 4px; /* Slight rounded corners */
    transition: background-color 0.3s ease; /* Smooth hover transition */
  }

  /* Hover effect for links */
  nav a:hover {
    background-color: #31dbc4; /* Subtle hover effect */
  }

  /* Responsive behavior for smaller screens */
  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      align-items: flex-start;
    }
    nav a {
      margin: 10px 0; /* Adjust spacing for vertical layout */
    }
  }
</style>
