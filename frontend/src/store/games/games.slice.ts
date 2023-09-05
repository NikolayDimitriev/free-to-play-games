import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchGames } from "./games.action";
import { APIError, Categories, Games, Platform, SortBy } from "@/src/typing";

type InitialStateType = {
  allGames: Games | null;
  games: Games | null;
  isLoading: boolean;
  error: APIError | null;
  activePage: number;
  totalCount: number;
  gamesPerPage: number;

  platform: Platform;
  category: Categories;
  sortBy: SortBy;
};

const initialState: InitialStateType = {
  allGames: null,
  games: null,
  isLoading: false,
  error: null,
  activePage: 1,
  totalCount: 0,
  gamesPerPage: 16,

  platform: "all",
  category: "all",
  sortBy: "relevance",
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    changePlatform: (state, action: PayloadAction<Platform>) => {
      state.platform = action.payload;
    },
    changeCategory: (state, action: PayloadAction<Categories>) => {
      state.category = action.payload;
    },
    changeSortBy: (state, action: PayloadAction<SortBy>) => {
      state.sortBy = action.payload;
    },
    changeActivePage: (state, action: PayloadAction<number>) => {
      state.activePage = action.payload;

      if (state.allGames) {
        state.games = state.allGames.slice(
          (action.payload - 1) * state.gamesPerPage,
          action.payload * state.gamesPerPage
        );
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.allGames = action.payload;
        state.activePage = 1;
        state.games = action.payload.slice(
          (state.activePage - 1) * state.gamesPerPage,
          state.activePage * state.gamesPerPage
        );
        state.isLoading = false;
        state.error = null;
        state.totalCount = action.payload.length;
      })
      .addCase(
        fetchGames.rejected,
        (state, action: PayloadAction<APIError | unknown>) => {
          state.allGames = null;
          state.games = null;
          state.isLoading = false;
          state.error = action.payload as APIError;
          state.activePage = 1;
          state.totalCount = 0;
        }
      );
  },
});

export const { reducer: gamesReducer } = gamesSlice;
export const {
  changeActivePage,
  changePlatform,
  changeCategory,
  changeSortBy,
} = gamesSlice.actions;
