<template>
  <div class="about">
    <h1>About TaskTrek</h1>
    <div class="content">
      <img src="../assets/pexels-leeloothefirst-5408918.jpg" alt="TaskTrek Team" class="about-image" />
      <div class="text">
        <p>
          TaskTrek is an innovative project management tool designed to help teams streamline their workflow and improve collaboration.
          With TaskTrek, teams can efficiently manage tasks, track progress, and ensure that every member stays aligned with project goals.
        </p>
        <p>
          Whether you're working on a small team or managing large-scale projects, TaskTrek provides a range of features that make project management easier:
        </p>
        <ul>
          <li>Task Assignment and Tracking</li>
          <li>Real-Time Collaboration</li>
          <li>Project Milestones and Deadlines</li>
          <li>Analytics and Reporting</li>
          <li>Seamless Integration with Other Tools</li>
        </ul>
        <p>
          Our goal is to empower teams by providing them with the tools they need to succeed and achieve their project milestones efficiently.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// You can add logic

</script>

<style scoped>
.about {
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.content {
  display: flex;
  align-items: flex-start; /* Ensure content starts from the top */
  justify-content: space-between;
  flex-wrap: wrap;
}

.about-image {
  max-width: 40%;
  border-radius: 8px;
  margin-right: 20px;
}

.text {
  max-width: 55%;
  font-size: 1rem;
  color: #555;
  margin-top: 0; /* Ensure no extra margin on top */
}

.text p {
  line-height: 1.6;
}

.text ul {
  margin-top: 10px;
  list-style-type: disc;
  padding-left: 20px;
}

.text li {
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
  }

  .about-image {
    max-width: 80%;
    margin-bottom: 20px;
  }

  .text {
    max-width: 90%;
    margin-top: 0; /* Ensure no extra margin on mobile devices */
  }
}
</style>
