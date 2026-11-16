import { createAsyncThunk } from "@reduxjs/toolkit";

import { getUpcomingGamesService } from "../../../api/services/gamesServices.js";

export const getGamesThunk = createAsyncThunk("games/getGamesThunk", () => {
    return getUpcomingGamesService();
});