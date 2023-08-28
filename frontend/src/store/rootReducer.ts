import { combineReducers } from "@reduxjs/toolkit";

import { gamesReducer } from "./games";

export const rootReducer = combineReducers({
  games: gamesReducer,
});
