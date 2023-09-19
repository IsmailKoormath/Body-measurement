import axios from "axios";

// export const BASICURL = "http://localhost:5000";
export const BASICURL = "http://192.168.29.217:5000";
// export const BASICURL = "http://192.168.57.27:5000";
// export const BASICURL = "http://192.168.43.217:5000";

export const axiosApi = axios.create({
  baseURL: BASICURL,
  withCredentials: true,
});
axiosApi.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  } else {
    console.log("no token provider");
  }
  return config;
});
