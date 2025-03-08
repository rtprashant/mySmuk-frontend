import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use(
  (config) => {
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.request.use(
  (config) => {
    const storedUser = localStorage.getItem("loggedInUser")
    if (storedUser) {
      const currentTime = new Date().getTime()
      if(currentTime>= storedUser.expiryTime){
        localStorage.removeItem("loggedInUser")
        window.location.href= '/'
        return Promise.reject(
          new Error("Token Expired")
        )

      }else{
        config.headers["Authorization"] = `Bearer ${storedUser.token}`;
      }
    }
    return config;
  }
)

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       console.log("Unauthorized! Redirecting to login...");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
