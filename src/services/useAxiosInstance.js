import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;


export const useAxiosInstance = () => {


  const axiosInstance = axios.create({
    baseURL: API_URL
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};
