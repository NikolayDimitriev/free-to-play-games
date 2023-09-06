import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { gamesService } from "@/src/services";
import { Params } from "@/src/typing";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (params: Params, thunkAPI) => {
    let retries = 0;
    let error: string = "";

    while (retries < 3) {
      try {
        const response = await gamesService.fetchGames(params);

        return response.data;
      } catch (e: unknown) {
        if (axios.isCancel(e)) {
          error = "Request was canceled";
          retries++;
          continue;
        }
        const err = e as AxiosError;

        error = err.response?.data as string;
      }

      retries++;
    }

    return thunkAPI.rejectWithValue(error);
  }
);
