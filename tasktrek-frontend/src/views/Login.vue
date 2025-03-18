<template>
    <div class="login-container">
      <div class="login-box">
        <h1>Welcome Back</h1>
        <p>Please log in to access your account</p>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Enter your username"
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
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const username = ref("");
  const password = ref("");
  const isSubmitted = ref(false);
  
  const login = () => {
    console.log("Logging in with:", username.value, password.value);
    isSubmitted.value = true;
  
    // Simulate a login process
    setTimeout(() => {
      username.value = "";
      password.value = "";
      isSubmitted.value = false;
      // Redirect to another page after successful login
      // Example: router.push('/dashboard');
    }, 2000);
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
    height: 100vh;
  }
  
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
  }
  
  .login-box {
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
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
  @media (max-width: 480px) {
    .login-box {
      padding: 20px;
    }
  
    h1 {
      font-size: 1.5rem;
    }
  
    p {
      font-size: 0.8rem;
    }
  }
  </style>