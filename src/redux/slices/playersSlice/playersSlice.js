import { createSlice } from "@reduxjs/toolkit";

import { getGamePlayersThunk } from "./playersThunks.js";

const initialState = {
    playersPerGames: {},
};

const playersSlice = createSlice({
    name: "players",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getGamePlayersThunk.pending, (state, action) => {
                const gameId = action.meta.arg;
                state.playersPerGames[gameId] = {
                    players: [],
                    status: "loading"
                }
            })
            .addCase(getGamePlayersThunk.fulfilled, (state, { payload }) => {
                const { gameId, players } = payload;

                state.playersPerGames[gameId] = {
                    players,
                    status: "succeeded"
                }
            })
            .addCase(getGamePlayersThunk.rejected, (state, { payload }) => {
                state.playersPerGames[payload.gameId] = { players: [], status: "rejected" }
            })
    },
});

export const playersReducer = playersSlice.reducer;