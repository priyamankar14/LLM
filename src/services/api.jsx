import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.189:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

// await api.post("/rag/ask/", {
//   query: message,
// });
