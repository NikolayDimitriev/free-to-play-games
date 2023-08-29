import axios from "axios";

export const BASE_URL =
  "https://free-to-play-games-database.p.rapidapi.com/api/";

export const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": "d9f1350a92mshdcf8ab48a45394ep13fd31jsn950027bd9be3",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
});
