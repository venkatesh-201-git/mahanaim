import { apiClient } from './api';

export const prayerService = {
  async submitPrayerRequest(prayerData) {
    // Send to future MERN backend endpoint
    const response = await apiClient.post('/prayers', {
      ...prayerData,
      submittedAt: new Date().toISOString(),
    });
    return response || { success: true, mocked: true };
  },

  async getIntercessionCount() {
    // Intercessory counter for community encouragement
    return 14280; // Placeholder counter
  }
};
