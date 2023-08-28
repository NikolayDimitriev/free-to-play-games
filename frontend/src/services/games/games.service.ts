import type { Games } from "@/src/typing";

import { API } from "@/src/api";

export const gamesService = {
  async fetchGames() {
    return await API.get<Games>('games');
  },
};
