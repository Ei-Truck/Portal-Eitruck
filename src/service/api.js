  import axios from "axios";

  const api = axios.create({
    baseURL: "https://api-sql-47zm.onrender.com",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const api_concat = axios.create({
    baseURL: "http://54.158.162.13:8000",
    headers: { "Content-Type": "application/json" }
  });


  api.interceptors.request.use((config) => {
    config.headers = config.headers || {};
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  export{
    api,
    api_concat
  }
