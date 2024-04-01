import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    console.error('Error: ', err);
    return Promise.reject(err);
  },
);

export default axiosClient;
