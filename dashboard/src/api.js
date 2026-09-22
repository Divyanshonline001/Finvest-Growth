import axios from "axios";

const resolveApiUrl = () => {
  if (typeof window !== "undefined" && window.location.hostname.includes("onrender.com")) {
    return "https://finvest-backend-pnj0.onrender.com";
  }
  if (process.env.REACT_APP_API_URL && !process.env.REACT_APP_API_URL.includes("localhost") && !process.env.REACT_APP_API_URL.includes("finvest-backend.onrender.com")) {
    return process.env.REACT_APP_API_URL;
  }
  return process.env.REACT_APP_API_URL || "http://localhost:4000";
};

export const API_URL = resolveApiUrl();

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
