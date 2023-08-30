import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchGameById } from "./game.action";
import { APIError, Game } from "@/src/typing";

type InitialStateType = {
  game: Game | null;
  isLoading: boolean;
  error: APIError | null;
};

const initialState: InitialStateType = {
  game: null,
  isLoading: false,
  error: null,
};

export const gameByIdSlice = createSlice({
  name: "gameById",
  initialState,
  reducers: {
    setGame(state, action: PayloadAction<Game>) {
      state.game = action.payload;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGameById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGameById.fulfilled, (state, action) => {
        state.game = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(
        fetchGameById.rejected,
        (state, action: PayloadAction<APIError | unknown>) => {
          state.game = null;
          state.isLoading = false;
          state.error = action.payload as APIError;
        }
      );
  },
});

export const { reducer: gameByIdReducer } = gameByIdSlice;
export const { setGame } = gameByIdSlice.actions;
