import { combineReducers } from "@reduxjs/toolkit";

import { gamesReducer } from "./games";
import { gameByIdReducer } from "./gameById";

export const rootReducer = combineReducers({
  games: gamesReducer,
  game: gameByIdReducer,
});
