import { createAsyncThunk } from "@reduxjs/toolkit";

import { getProfileService } from "../../../api/services/authService.js";

export const getProfileThunk = createAsyncThunk("auth/getProfileThunk", (action) => {
    return getProfileService(action);
});