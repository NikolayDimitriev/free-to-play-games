import axios from "axios";

export const BASE_URL =
  "https://free-to-play-games-database.p.rapidapi.com/api/";

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": import.meta.env.API_KEY,
    "X-RapidAPI-Host": import.meta.env.API_HOST,
  },
});
