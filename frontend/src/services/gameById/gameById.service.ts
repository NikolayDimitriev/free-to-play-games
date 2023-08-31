import { CancelToken } from "axios";
import type { GameById } from "@/src/typing";

import { API } from "@/src/api";

export const gameByIdService = {
  async fetchGameById(data: { id: string; cancelToken: CancelToken }) {
    return await API.get<GameById>("game", {
      params: { id: data.id },
      cancelToken: data.cancelToken,
    });
  },
};
