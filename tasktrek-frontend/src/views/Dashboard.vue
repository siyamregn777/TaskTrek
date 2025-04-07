<template>
  <div :class="['dashboard', { 'dark-mode': isDarkMode }]">
    <!-- Header Section -->
    <header class="header">
      <!-- <h1>Welcome, {{ userName }}</h1> -->
      <p class="subtitle">Your project management overview</p>
      <button @click="toggleDarkMode" class="mode-toggle-btn">
        {{ isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode" }}
      </button>
    </header>

    <!-- Stats Section -->
    <div class="stats">
      <div class="stat-box">
        <div class="stat-icon">📊</div>
        <h2>{{ tasks.length }}</h2>
        <p>Total Tasks</p>
      </div>
      <div class="stat-box">
        <div class="stat-icon">✅</div>
        <h2>{{ completedTasks }}</h2>
        <p>Completed Tasks</p>
      </div>
      <div class="stat-box">
        <div class="stat-icon">⏳</div>
        <h2>{{ pendingTasks }}</h2>
        <p>Pending Tasks</p>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="progress-bar-container">
      <div class="progress-bar" :style="{ width: progressPercentage + '%' }"></div>
      <p>{{ progressPercentage.toFixed(1) }}% Completed</p>
    </div>

    <!-- Quick Actions Section -->
    <div class="quick-actions">
      <button @click="addTask" class="action-btn">
        <span class="icon">➕</span>
        <span>Add New Task</span>
      </button>
      <button @click="openCalendar" class="action-btn">
        <span class="icon">📅</span>
        <span>View Calendar</span>
      </button>
      <button @click="openReports" class="action-btn">
        <span class="icon">📈</span>
        <span>Generate Reports</span>
      </button>
    </div>

    <!-- Task List Section -->
    <div class="task-list">
      <h2>Your Tasks</h2>
      <div v-if="tasks.length" class="task-grid">
        <div v-for="task in tasks" :key="task.id" class="task-card">
          <div class="task-header">
            <h3 :class="{ completed: task.completed }">{{ task.title }}</h3>
            <div class="task-actions">
              <button @click="toggleTaskCompletion(task.id)" class="task-action-btn">
                {{ task.completed ? "⏪ Undo" : "✅ Complete" }}
              </button>
              <button @click="deleteTask(task.id)" class="task-action-btn delete-btn">
                🗑️ Delete
              </button>
            </div>
          </div>
          <p class="task-description">{{ task.description || "No description available." }}</p>
          <div class="task-footer">
            <span class="task-date">📅 {{ task.dueDate || "No due date" }}</span>
            <span class="task-priority" :class="task.priority">
              ⚡ {{ task.priority || "Normal" }}
            </span>
          </div>
        </div>
      </div>
      <p v-else class="no-tasks">No tasks available. Add some tasks!</p>
    </div>

    <!-- Recent Activity Section -->
    <div class="recent-activity">
      <h2>Recent Activity</h2>
      <ul>
        <li v-for="activity in recentActivities" :key="activity.id">
          <span class="activity-icon">📢</span>
          <span class="activity-text">{{ activity.text }}</span>
          <span class="activity-time">{{ activity.time }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const userName = ref("Siyamregn Yeshidagna");
const isDarkMode = ref(false);

// Watch for dark mode changes and apply to the body
watch(isDarkMode, (newVal) => {
  if (newVal) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});

const tasks = ref([
  {
    id: 1,
    title: "Complete Vue.js Project",
    description: "Finish the dashboard project using Vue.js.",
    dueDate: "2023-10-15",
    priority: "High",
    completed: true,
  },
  {
    id: 2,
    title: "Review PRs and Merge",
    description: "Review pull requests and merge them into the main branch.",
    dueDate: "2023-10-10",
    priority: "Medium",
    completed: false,
  },
  {
    id: 3,
    title: "Update Documentation",
    description: "Update the project documentation for the new features.",
    dueDate: "2023-10-12",
    priority: "Low",
    completed: false,
  },
]);

const recentActivities = ref([
  { id: 1, text: "You added a new task: 'Complete Vue.js Project'.", time: "2 hours ago" },
  { id: 2, text: "You completed the task: 'Review PRs and Merge'.", time: "1 day ago" },
  { id: 3, text: "You updated the task: 'Update Documentation'.", time: "3 days ago" },
]);

const completedTasks = computed(() => tasks.value.filter((task) => task.completed).length);
const pendingTasks = computed(() => tasks.value.length - completedTasks.value);
const progressPercentage = computed(() => (completedTasks.value / tasks.value.length) * 100 || 0);

const addTask = () => {
  const newId = tasks.value.length + 1;
  tasks.value.push({
    id: newId,
    title: `New Task ${newId}`,
    description: "This is a new task.",
    dueDate: "2023-10-20",
    priority: "Normal",
    completed: false,
  });
};

const toggleTaskCompletion = (id) => {
  const task = tasks.value.find((task) => task.id === id);
  if (task) task.completed = !task.completed;
};

const deleteTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};

const openCalendar = () => {
  alert("Calendar view will open here.");
};

const openReports = () => {
  alert("Reports will be generated here.");
};
</script>

<style>
/* Global Styles */
body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #f5f5f5;
  color: #333;
  transition: background 0.3s ease, color 0.3s ease;
}

body.dark-mode {
  background: #1a1a1a;
  color: #f0f0f0;
}

/* Dashboard Styles */
.dashboard {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
}

.mode-toggle-btn {
  padding: 10px 20px;
  font-size: 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.mode-toggle-btn:hover {
  background: #0056b3;
}

/* Stats Section */
.stats {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-bottom: 30px;
}

.stat-box {
  background: var(--stat-box-bg, #ffffff);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
}

body.dark-mode .stat-box {
  background: #2c2c2c;
}

.stat-icon {
  font-size: 24px;
  margin-bottom: 10px;
}

.stat-box h2 {
  margin: 0;
  font-size: 24px;
  color: #007bff;
}

.stat-box p {
  margin: 5px 0 0;
  font-size: 14px;
  color: #666;
}

/* Progress Bar */
.progress-bar-container {
  margin: 20px auto;
  width: 80%;
}

.progress-bar {
  height: 10px;
  background: #28a745;
  border-radius: 5px;
  transition: width 0.5s ease-in-out;
}

/* Quick Actions */
.quick-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.action-btn:hover {
  background: #0056b3;
}

/* Task List */
.task-list {
  margin-bottom: 30px;
}

.task-list h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.task-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.task-card {
  background: var(--task-card-bg, #ffffff);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

body.dark-mode .task-card {
  background: #2c2c2c;
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.task-header h3 {
  margin: 0;
  font-size: 18px;
}

.task-header h3.completed {
  text-decoration: line-through;
  color: #666;
}

.task-actions {
  display: flex;
  gap: 10px;
}

.task-action-btn {
  padding: 5px 10px;
  font-size: 14px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.task-action-btn.delete-btn {
  background: #dc3545;
}

.task-action-btn:hover {
  background: #218838;
}

.task-action-btn.delete-btn:hover {
  background: #c82333;
}

.task-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.task-footer {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
}

.task-priority.High {
  color: #dc3545;
}

.task-priority.Medium {
  color: #ffc107;
}

.task-priority.Low {
  color: #28a745;
}

.no-tasks {
  text-align: center;
  color: #666;
}

/* Recent Activity */
.recent-activity {
  background: var(--recent-activity-bg, #ffffff);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

body.dark-mode .recent-activity {
  background: #2c2c2c;
}

.recent-activity h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.recent-activity ul {
  list-style: none;
  padding: 0;
}

.recent-activity li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.activity-icon {
  font-size: 18px;
}

.activity-text {
  flex: 1;
  font-size: 14px;
}

.activity-time {
  font-size: 12px;
  color: #666;
}

/* Responsive Design */
@media (max-width: 768px) {
  .stats {
    flex-direction: column;
  }

  .quick-actions {
    flex-direction: column;
  }

  .task-grid {
    grid-template-columns: 1fr;
  }
}
</style>