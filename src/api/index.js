import axios from "axios";

// API anahtarı kontrolü
if (!import.meta.env.VITE_RAPIDAPI_KEY) {
  console.warn(
    "⚠️ VITE_RAPIDAPI_KEY environment variable is not set. Please create a .env file with your API key."
  );
}

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL || "https://flight-radar1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    "x-rapidapi-host":
      import.meta.env.VITE_RAPIDAPI_HOST || "flight-radar1.p.rapidapi.com",
  },
});

export default api;
