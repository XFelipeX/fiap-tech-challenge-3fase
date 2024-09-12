import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseURL = 'http://localhost:6868';

const api = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const setupInterceptors = (navigate) => {
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        navigate('/login');
      }
      return Promise.reject(error);
    },
  );

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
};

export { api, setupInterceptors };
