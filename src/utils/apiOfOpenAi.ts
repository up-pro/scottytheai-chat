import axios from "axios";

const apiOfOpenAi = axios.create({
  baseURL: "https://api.openai.com/v1/chat/completions",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
  }
});

apiOfOpenAi.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);

export default apiOfOpenAi;
