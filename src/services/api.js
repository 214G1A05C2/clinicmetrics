import axios from "axios";

const API = axios.create({
  baseURL: "https://clinicmetrics-backend.onrender.com",
});

export default API;