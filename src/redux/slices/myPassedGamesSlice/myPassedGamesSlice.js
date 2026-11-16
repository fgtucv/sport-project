import { createSlice } from "@reduxjs/toolkit";

import { getMyPassedGamesThunk } from "./myPassedGamesThunks.js";

const initialState = {
    games: [],
    status: "wait",
}

const myPassedGamseSlice = createSlice({
    name: "myGames",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getMyPassedGamesThunk.pending, (state) => {
                state.status = "loading"
            })
            .addCase(getMyPassedGamesThunk.fulfilled, (state, { payload }) => {
                // console.log(payload)
                state.games = payload
                state.status = "succeeced"
            })
            .addCase(getMyPassedGamesThunk.rejected, (state,) => {
                state.games = []
                state.status = "rejected"
            })
    }
});

export const myPassedGamesReducer = myPassedGamseSlice.reducer;