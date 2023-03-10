import axios from 'axios';
import { toast } from 'react-toastify';
import { clearAll } from '../utils/storage';

const axiosPrivate = axios.create({
  baseURL: 'https://api-market-place-cubos.herokuapp.com',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

axiosPrivate.interceptors.response.use(
  response => response,
  async error => {
    if (error?.response?.status === 401) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        window.location.replace(
          'https://api-market-place-cubos.herokuapp.com/login'
        );
        clearAll();
      }, 2500);
    }
    return Promise.reject(error);
  }
);

export default axiosPrivate;
