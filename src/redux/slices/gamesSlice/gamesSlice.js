import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

import { getGamesThunk } from "./gamesThunks.js";

const initialState = {
    games: [],
    error: null,
    loading: false,
};

const gamesSlice = createSlice({
    name: "games",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getGamesThunk.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getGamesThunk.fulfilled, (state, { payload }) => {
                state.games = payload
                state.error = null
                state.loading = false
            })
            .addCase(getGamesThunk.rejected, (state, { payload }) => {
                toast.error("Помилка", { description: "Не вдалось завантажити ігри" })
                state.error = payload
                state.loading = false
            })
    },
});

export const gamesReducers = gamesSlice.reducer;