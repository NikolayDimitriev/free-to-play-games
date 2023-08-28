import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchGames } from "./games.action";
import { Games } from "@/src/typing";

type InitialStateType = {
  games: Games | null;
  isLoading: boolean;
  error: unknown | null;
};

const initialState: InitialStateType = {
  games: null,
  isLoading: false,
  error: null,
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.games = action.payload;
        state.isLoading = false;

        state.error = null;
      })
      .addCase(
        fetchGames.rejected,
        (state, action: PayloadAction<unknown | unknown>) => {
          state.games = null;
          state.isLoading = false;
          state.error = action.payload as unknown;
        }
      );
  },
});

export const { reducer: gamesReducer } = gamesSlice;
