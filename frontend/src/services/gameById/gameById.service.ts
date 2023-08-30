import type { Game } from "@/src/typing";

import { API } from "@/src/api";

export const gameByIdService = {
  async fetchGameById(params: { id: string }) {
    return await API.get<Game>("game", { params });
  },
};
