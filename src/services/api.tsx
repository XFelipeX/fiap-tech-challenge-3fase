import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';

const baseURL = 'http://localhost:6868';

const api = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const setupInterceptors = () => {
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // navigate('/login');
      }
      return Promise.reject(error);
    },
  );

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
};

export { api, setupInterceptors };
