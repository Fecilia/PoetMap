import axios from "axios";
import { ElMessage as message } from "element-plus"

const service = axios.create({
  baseURL: "http://101.34.228.44:3000",
  timeout: 50000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      message.error({
        content: res.message || "Error",
        duration: 5 * 1000,
      });

      if ([50008, 50012, 50014].includes(res.code)) {
        message.error({
          content:
            "You have been logged out, you can cancel to stay on this page, or log in again",
        });
      }
      return Promise.reject(new Error(res.message || "Error"));
    }
    return res;
  },
  (error) => {
    message.error({
      content: error.message,
    });
    return Promise.reject(error);
  }
);

export default service;
