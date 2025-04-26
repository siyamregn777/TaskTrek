import { defineStore } from 'pinia';
import axios from 'axios';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    task: null,
  }),

  actions: {
    async fetchTasks() {
      try {
        const response = await axios.get('/api/tasks'); // Fetch tasks from backend
        this.tasks = response.data;
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },

    async fetchTask(id) {
      try {
        const response = await axios.get(`/api/tasks/${id}`); // Fetch a single task
        this.task = response.data;
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    },

    async addTask(newTask) {
      try {
        await axios.post('/api/tasks', newTask); // Add a new task to backend
        this.fetchTasks(); // Refresh tasks
      } catch (error) {
        console.error('Error adding task:', error);
      }
    },

    async updateTask(updatedTask) {
      try {
        await axios.put(`/api/tasks/${updatedTask.id}`, updatedTask); // Update task
        this.fetchTasks(); // Refresh tasks
      } catch (error) {
        console.error('Error updating task:', error);
      }
    },

    async deleteTask(id) {
      try {
        await axios.delete(`/api/tasks/${id}`); // Delete task
        this.fetchTasks(); // Refresh tasks
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    },
  },
});
