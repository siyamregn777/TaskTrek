<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <p>If you have any questions or need assistance, feel free to reach out to us using the form below.</p>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" v-model="name" placeholder="Enter your full name" required />
      </div>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" v-model="email" placeholder="Enter your email address" required />
      </div>
      <div class="form-group">
        <label for="message">Your Message</label>
        <textarea id="message" v-model="message" placeholder="Write your message here" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
    <div v-if="isSubmitted" class="confirmation">
      <p>Your message has been sent! Thank you for reaching out to us.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const isSubmitted = ref(false);

const submitForm = () => {
  console.log('Name:', name.value);
  console.log('Email:', email.value);
  console.log('Message:', message.value);

  // Simulating a form submission
  setTimeout(() => {
    isSubmitted.value = true;

    // Clear the form after submission
    name.value = '';
    email.value = '';
    message.value = '';
  }, 1000);
};
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;

}

h1 {
  text-align: center;
  margin-bottom: 10px;
  font-size: 2rem;
  color: #333;
}

p {
  text-align: center;
  color: #666;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-size: 1rem;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  margin-top: 5px;
}

textarea {
  min-height: 150px;
}

button {
  display: block;
  width: 30%;
  padding: 12px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #326e35;
}

.confirmation {
  text-align: center;
  padding: 20px;
  background-color: #e0ffe0;
  border-radius: 8px;
  margin-top: 20px;
  color: #388e3c;
  font-size: 1.1rem;
}
</style>
