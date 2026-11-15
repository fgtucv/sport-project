import { createAsyncThunk } from "@reduxjs/toolkit";

import { getGamePlayers } from "../../../api/services/playersServices.js";

export const getGamePlayersThunk = createAsyncThunk("players/getGamePlayersThunk", (gameId) => {
    return getGamePlayers(gameId);
});