<template>
  <div class="signup-container">
    <!-- Left Section: Image with Text -->
    <div class="left-section">
      <div class="image-container">
        <img src="../assets/pexels-yankrukov-7640773.jpg" alt="Task Management" />
        <div class="image-text">
          <h2>Task Management Made Easy</h2>
          <p>Anyone can add tasks, schedule them, get reminders, and assign them to others.</p>
        </div>
        <div class="social-icons">
          <p>Or sign up using:</p>
          <div class="icon-container">
            <img
              src="../assets/360_F_391792593_BYfEk8FhvfNvXC5ERCw166qRFb8mYWya (1).jpg"
              alt="Google Icon"
              @click="handleGoogleSignup"
            />
            <img
              src="../assets/free-blue-linkedin-logo-icon-15916-thumb.png"
              alt="LinkedIn Icon"
              @click="handleLinkedInSignup"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Right Section: Registration Form -->
    <div class="right-section">
      <div class="signup-box">
        <h1>Create Your Account</h1>
        <p>Join us to get started</p>
        <form @submit.prevent="handleSignup">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              v-model="firstName"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              v-model="lastName"
              placeholder="Enter your last name"
              required
            />
          </div>
          
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
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" class="signup-button">Sign Up</button>
          <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
          <div v-if="isSubmitted" class="success-message">
            Signup successful! Redirecting...
          </div>
        </form>
        <p class="login-link">Already have an account? <a href="#">Login</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const firstName = ref("");
const lastName = ref("");
const password = ref("");
const confirmPassword = ref("");
const isSubmitted = ref(false);
const errorMessage = ref("");

const handleSignup = () => {
  // Validate inputs
  if (
    !firstName.value ||
    !lastName.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    errorMessage.value = "All fields are required.";
    return;
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = "Passwords do not match.";
    return;
  }

  // Simulate a signup process
  console.log("Signing up with:", {
    firstName: firstName.value,
    lastName: lastName.value,
    password: password.value,
  });

  isSubmitted.value = true;
  errorMessage.value = "";

  // Clear form and redirect after 2 seconds
  setTimeout(() => {
    firstName.value = "";
    lastName.value = "";
    password.value = "";
    confirmPassword.value = "";
    isSubmitted.value = false;
    // Redirect to another page after successful signup
    // Example: router.push('/dashboard');
  }, 2000);
};

const handleGoogleSignup = () => {
  console.log("Signing up with Google");
  // Add Google OAuth logic here
};

const handleLinkedInSignup = () => {
  console.log("Signing up with LinkedIn");
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

.signup-container {
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

.signup-box {
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

.signup-button {
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

.signup-button:hover {
  background-color: #0056b3;
}

.error-message {
  margin-top: 10px;
  color: #dc3545;
  font-size: 0.9rem;
}

.success-message {
  margin-top: 10px;
  color: #28a745;
  font-size: 0.9rem;
}

.login-link {
  margin-top: 20px;
  font-size: 0.9rem;
  color: #666;
}

.login-link a {
  color: #007bff;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}

/* Responsive design */
@media (max-width: 768px) {
  .signup-container {
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