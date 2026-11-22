import { configureStore } from "@reduxjs/toolkit";

import { gamesReducers } from "./slices/gamesSlice/gamesSlice.js";
import { authReducer } from "./slices/authSlice/authSlice.js";
import { playersReducer } from "./slices/playersSlice/playersSlice.js";
import { myPassedGamesReducer } from "./slices/myPassedGamesSlice/myPassedGamesSlice.js";
import { createEventReducer } from "./slices/createEventSlice/createEventSlice.js";

export const store = configureStore({
    reducer: {
        games: gamesReducers,
        auth: authReducer,
        players: playersReducer,
        myPassedGames: myPassedGamesReducer,
        create: createEventReducer,
    }
});