import { createSlice } from "@reduxjs/toolkit";

import { getUpcomingGamesThunk, getPastGamesThunk } from "./gamesThunks.js";

const initialState = {
    upcoming: {
        games: [],
        status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    past: {
        games: [],
        status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
};

const gamesSlice = createSlice({
    name: "games",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getUpcomingGamesThunk.pending, ({ upcoming }) => {
                upcoming.status = 'loading'
                upcoming.status = null
            })
            .addCase(getUpcomingGamesThunk.fulfilled, ({ upcoming }, { payload }) => {
                upcoming.games = payload
                upcoming.error = null
                upcoming.status = 'succeeded'
            })
            .addCase(getUpcomingGamesThunk.rejected, ({ upcoming }, { payload }) => {
                // toast.error("Помилка", { description: "Не вдалось завантажити ігри" })
                upcoming.error = payload
                upcoming.status = 'failed'
            })

            .addCase(getPastGamesThunk.pending, ({ past }) => {
                past.status = 'loading'
                past.status = null
            })
            .addCase(getPastGamesThunk.fulfilled, ({ past }, { payload }) => {
                past.games = payload
                past.error = null
                past.status = 'succeeded'
            })
            .addCase(getPastGamesThunk.rejected, ({ past }, { payload }) => {
                // toast.error("Помилка", { description: "Не вдалось завантажити ігри" })
                past.error = payload
                past.status = 'failed'
            })
    },
});

export const gamesReducers = gamesSlice.reducer;