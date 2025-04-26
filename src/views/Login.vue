<template>
  <div class="login-container">
    <!-- Left Section: Image with Text -->
    <div class="left-section">
      <div class="image-container">
        <img src="../assets/pexels-yankrukov-7640773.jpg" alt="Task Management" />
        <div class="image-text">
          <h2>Task Management Made Easy</h2>
          <p>Anyone can add tasks, schedule them, get reminders, and assign them to others.</p>
        </div>
        <div class="social-icons">
          <p>Or log in using:</p>
          <div class="icon-container">
            <img
              src="../assets/360_F_391792593_BYfEk8FhvfNvXC5ERCw166qRFb8mYWya (1).jpg"
              alt="Google Icon"
              @click="handleGoogleLogin"
            />
            <img
              src="../assets/free-blue-linkedin-logo-icon-15916-thumb.png"
              alt="LinkedIn Icon"
              @click="handleLinkedInLogin"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Right Section: Login Form -->
    <div class="right-section">
      <div class="login-box">
        <h1>Welcome Back</h1>
        <p>Please log in to access your account</p>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" class="login-button">Log In</button>
        </form>
        <div v-if="isSubmitted" class="success-message">
          Login successful! Redirecting...
        </div>
        <div class="additional-links">
          <a href="#">Forgot password?</a>
          <a href="#">Create an account</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const isSubmitted = ref(false);

const login = () => {
  console.log("Logging in with:", email.value, password.value);
  isSubmitted.value = true;

  // Simulate a login process
  setTimeout(() => {
    email.value = "";
    password.value = "";
    isSubmitted.value = false;
    // Redirect to another page after successful login
    // Example: router.push('/dashboard');
  }, 2000);
};

const handleGoogleLogin = () => {
  console.log("Logging in with Google");
  // Add Google OAuth logic here
};

const handleLinkedInLogin = () => {
  console.log("Logging in with LinkedIn");
  // Add LinkedIn OAuth logic here
};
</script>

<style scoped>
/* General styles */
body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.left-section {
  flex: 1;
  margin-right: 40px;
}

.image-container {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  height: 600px; /* Adjust height to match the form */
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-text {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  width: 80%;
}

.image-text h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.image-text p {
  font-size: 1rem;
  margin: 0;
  color: #f0f2f5;
}

.social-icons {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
}

.social-icons p {
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.icon-container {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.icon-container img {
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.icon-container img:hover {
  transform: scale(1.1);
}

.right-section {
  flex: 1;
  max-width: 400px;
}

.login-box {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;
}

p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #007bff;
}

.login-button {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}

.success-message {
  margin-top: 20px;
  color: #28a745;
  font-size: 0.9rem;
}

.additional-links {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.additional-links a {
  color: #007bff;
  text-decoration: none;
  font-size: 0.9rem;
}

.additional-links a:hover {
  text-decoration: underline;
}

/* Responsive design */
@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
    padding: 20px;
  }

  .left-section {
    margin-right: 0;
    margin-bottom: 40px;
  }

  .image-container {
    height: 400px; /* Adjust height for smaller screens */
  }

  .image-text h2 {
    font-size: 1.5rem;
  }

  .image-text p {
    font-size: 0.9rem;
  }

  .right-section {
    max-width: 100%;
  }
}
</style>