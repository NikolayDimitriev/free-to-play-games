import { createAsyncThunk } from "@reduxjs/toolkit";

import { gamesService } from "@/src/services";
import { AxiosError } from "axios";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (params: Record<string, string>, thunkAPI) => {
    try {
      const response = await gamesService.fetchGames(params);

      return {
        allGames: response.data,
        games: response.data.slice(0, 16),
      };
    } catch (e: unknown) {
      const error = e as AxiosError;

      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
