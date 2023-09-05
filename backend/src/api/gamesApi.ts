import axios from 'axios';

import { Games, GameById, QueryParams } from '../typing/index.ts';

export const BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api';

export const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': 'd9f1350a92mshdcf8ab48a45394ep13fd31jsn950027bd9be3',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
});

export const getGames = async (params: QueryParams): Promise<Games> => {
  const response = await API.get<Games>('/games', { params });

  if (response.status === 200 && response.data) {
    return response.data;
  }

  return [];
};

export const getGameById = async (gameID: number): Promise<GameById> => {
  const response = await API.get<GameById>(`/game`, { params: { id: gameID } });

  if (response.status === 200 && response.data) {
    return response.data;
  }

  return {} as GameById;
};
