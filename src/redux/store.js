import { configureStore } from "@reduxjs/toolkit";

import { gamesReducers } from "./slices/gamesSlice/gamesSlice.js";

export const store = configureStore({
    reducer: {
        games: gamesReducers,
    }
})