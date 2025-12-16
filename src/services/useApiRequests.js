import { useAxiosInstance } from '@/services/useAxiosInstance.js';

export const useApiRequests = () => {
  const axiosInstance = useAxiosInstance();

  const GET = (url, config = {}) =>
    axiosInstance
      .get(url, {
        ...config,
        onDownloadProgress: (progressEvent) => {
          if (config?.onProgress) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            config?.onProgress(percentCompleted);
          }
        }
      })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data;
      });

  const POST = (url, { arg }, config = {}) =>
    axiosInstance
      .post(url, arg, config)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data;
      });
  const PATCH = (url, { arg } = {}, config = {}) =>
    axiosInstance
      .patch(url, arg, config)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data;
      });

  const PUT = (url, { arg }, config = {}) =>
    axiosInstance
      .put(url, arg, config)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data;
      });

  const DELETE = (url) => axiosInstance.delete(url).then((res) => res.data);

  return {
    GET,
    POST,
    PUT,
    DELETE,
    PATCH
  };
};
