import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

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
                state.games = payload
                state.status = "succeeced"
            })
            .addCase(getMyPassedGamesThunk.rejected, (state,) => {
                toast.error("Помилка", { description: "Не вдалось завантажити ігри" })
                state.games = []
                state.status = "rejected"
            })
    }
});

export const myPassedGamesReducer = myPassedGamseSlice.reducer;