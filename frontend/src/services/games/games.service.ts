import type { Games, Params } from "@/src/typing";

import { API } from "@/src/api";

export const gamesService = {
  async fetchGames({cancelToken, ...params}: Params) {
    return await API.get<Games>("games", { params, cancelToken });
  },
};
