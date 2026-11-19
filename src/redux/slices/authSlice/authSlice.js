import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

import { getProfileThunk } from "./authThunks.js";

const initialState = {
    profile: null,
    session: null,
    initialized: false,

    authError: null,
    authLoading: false,

    profileError: null,
    profileLoading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setSession: (state, { payload }) => {
            state.session = payload
            state.initialized = true

            if (payload) {
                if (!state.profile) state.profileLoading = true;
            } else {
                state.profile = null;
                state.profileLoading = false;
                state.profileError = null;
                state.authLoading = false;
                state.authError = null;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfileThunk.pending, (state) => {
                state.profileLoading = true
                state.profileError = null
            })
            .addCase(getProfileThunk.fulfilled, (state, { payload }) => {
                state.profile = payload
                state.profileLoading = false
                state.profileError = null
            })
            .addCase(getProfileThunk.rejected, (state, { payload }) => {
                toast.error("Помилка", { description: "Не вдалось завантажити ваш профіль" })
                state.profileError = payload
                state.profileLoading = false
                state.profile = null
            })
    }
});

export const { setSession } = authSlice.actions;
export const authReducer = authSlice.reducer;