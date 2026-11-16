import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMyPassedGamesService } from "../../../api/services/gamesServices.js";

export const getMyPassedGamesThunk = createAsyncThunk("myGames/getMyPassedGamesThunk",
    (playerId) => {
        return getMyPassedGamesService(playerId);
    }
)