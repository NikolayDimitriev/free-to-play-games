import { createAsyncThunk } from "@reduxjs/toolkit";

import { gamesService } from "@/src/services";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (_, thunkAPI) => {
    try {
      const response = await gamesService.fetchGames();
      return response.data;
    } catch (e: unknown) {
      const error = e;
      console.log(error);

      // return thunkAPI.rejectWithValue(error.response?.data);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
