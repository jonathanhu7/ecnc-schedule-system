import axios from "axios";

export interface ErrorResponse {
  detail: string;
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

// 添加请求拦截器，附加 token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
