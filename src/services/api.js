/**
 * Central API Client for Mahanaim Prayer Ministries Frontend
 * Connects to future MERN Backend (configured via VITE_API_BASE_URL)
 * Gracefully falls back to mock service data when backend is offline or during frontend-only phase.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const apiClient = {
  async get(endpoint) {
    try {
      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      // Return null to allow fallback to local data
      return null;
    }
  },

  async post(endpoint, data) {
    try {
      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      // Mock successful simulated submission
      return { success: true, mocked: true, data };
    }
  },
};
