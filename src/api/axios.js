import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api/v1/',
});

// Intercepteur pour ajout token aux requêtes
axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
