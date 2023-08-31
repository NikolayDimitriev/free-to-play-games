import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { gamesService } from "@/src/services";
import { Params } from "@/src/typing";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (params: Params, thunkAPI) => {
    try {
      const response = await gamesService.fetchGames(params);

      return {
        allGames: response.data,
        games: response.data.slice(0, 16),
      };
    } catch (e: unknown) {
      if (axios.isCancel(e)) {
        return thunkAPI.rejectWithValue("Request was canceled");
      }
      const error = e as AxiosError;

      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
