import axios from "axios";
const api = axios.create({
  baseURL: "https://api-sql-qa.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use((config) => {
  config.headers = config.headers || {};
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default api;
