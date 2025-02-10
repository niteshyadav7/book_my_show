import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://book-my-show-lydp.onrender.com/",
  // baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
