import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
});

// Attach JWT token to each request if available
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    config.headers.Authorization = user.token;
  }
  return config;
});

export default API;
