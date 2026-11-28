import { createAsyncThunk } from "@reduxjs/toolkit";

import { getUpcomingGamesService, getMyPastGamesService } from "../../../api/services/gamesServices.js";

export const getUpcomingGamesThunk = createAsyncThunk("games/getGamesThunk", () => {
    return getUpcomingGamesService();
});

export const getPastGamesThunk = createAsyncThunk("games/getPastGamesThunk", () => {
    return getMyPastGamesService();
});