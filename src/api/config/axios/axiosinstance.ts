import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    console.log("Error while using axios", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
