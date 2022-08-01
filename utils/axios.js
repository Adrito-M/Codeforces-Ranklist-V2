import { BASE_URL } from "./constants";
import axios from "axios";

var axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;