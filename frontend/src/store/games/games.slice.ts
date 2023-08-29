import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchGames } from "./games.action";
import { APIError, Games } from "@/src/typing";

type InitialStateType = {
  allGames: Games | null;
  games: Games | null;
  isLoading: boolean;
  error: APIError | null;
};

const initialState: InitialStateType = {
  allGames: null,
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
        state.allGames = action.payload.allGames;
        state.games = action.payload.games;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(
        fetchGames.rejected,
        (state, action: PayloadAction<APIError | unknown>) => {
          state.allGames = null;
          state.games = null;
          state.isLoading = false;
          state.error = action.payload as APIError;
        }
      );
  },
});

export const { reducer: gamesReducer } = gamesSlice;
