import axios from "axios";

export const BASE_URL =
  "https://free-to-play-games-database.p.rapidapi.com/api/";

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
