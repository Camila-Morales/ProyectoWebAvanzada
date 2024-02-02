import axios from "axios";
const API = "http://localhost:2025/api";
const instance=axios.create({
  baseURL: API,
  withCredentials: true,
});

export default instance;