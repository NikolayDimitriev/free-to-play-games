import type { Games } from "@/src/typing";

import { API } from "@/src/api";

export const gamesService = {
  async fetchGames(params: Record<string, string>) {
    return await API.get<Games>("games", { params });
  },
};
