<template>
  <div class="profile-container">
    <div class="profile-card">
      <div class="profile-header">
        <h1>User Profile</h1>
      </div>
      <div class="profile-content">
        <div class="profile-picture">
          <img
            src="../assets/pexels-sarah-chai-7282833.jpg"
            alt="Profile Picture"
            class="profile-image"
          />
          <button class="edit-button">Edit Picture</button>
        </div>
        <div class="profile-details">
          <div class="detail-item">
            <label>Name:</label>
            <p>Siyamregn Yeshidagna</p>
          </div>
          <div class="detail-item">
            <label>Email:</label>
            <p>siyamregnyeshidagna.com</p>
          </div>
          <div class="detail-item">
            <label>Joined:</label>
            <p>January 1, 2025</p>
          </div>
        </div>
        <div class="profile-actions">
          <button class="action-button edit-profile">Edit Profile</button>
          <button class="action-button logout">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
};
</script>

<style scoped>
/* General styles */
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  padding: 20px;
}

.profile-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  padding: 20px;
}

.profile-header {
  text-align: center;
  margin-bottom: 20px;
}

.profile-header h1 {
  font-size: 2rem;
  color: #333;
}

.profile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-picture {
  text-align: center;
  margin-bottom: 20px;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #007bff;
}

.edit-button {
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 0.9rem;
  color: #007bff;
  background-color: transparent;
  border: 1px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.edit-button:hover {
  background-color: #007bff;
  color: white;
}

.profile-details {
  width: 100%;
  margin-bottom: 20px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.detail-item:last-child {
  border-bottom: none;
}

.detail-item label {
  font-weight: bold;
  color: #333;
}

.detail-item p {
  color: #666;
}

.profile-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
}

.action-button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-profile {
  background-color: #007bff;
  color: white;
}

.edit-profile:hover {
  background-color: #0056b3;
}

.logout {
  background-color: #dc3545;
  color: white;
}

.logout:hover {
  background-color: #c82333;
}

/* Responsive design */
@media (max-width: 768px) {
  .profile-card {
    padding: 15px;
  }

  .profile-header h1 {
    font-size: 1.5rem;
  }

  .profile-image {
    width: 120px;
    height: 120px;
  }

  .edit-button {
    font-size: 0.8rem;
    padding: 6px 12px;
  }

  .action-button {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}
</style>