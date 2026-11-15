import { configureStore } from "@reduxjs/toolkit";

import { gamesReducers } from "./slices/gamesSlice/gamesSlice.js";
import { authReducer } from "./slices/authSlice/authSlice.js";
import { playersReducer } from "./slices/playersSlice/playersSlice.js";

export const store = configureStore({
    reducer: {
        games: gamesReducers,
        auth: authReducer,
        players: playersReducer,
    }
})