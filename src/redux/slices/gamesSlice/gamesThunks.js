import { createAsyncThunk } from "@reduxjs/toolkit";

import { getGamesService } from "../../../api/services/gamesServices.js";

export const getGamesThunk = createAsyncThunk("games/getGamesThunk", () => {
    return getGamesService();
});