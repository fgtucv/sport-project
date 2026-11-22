import { createSlice, legacy_createStore } from "@reduxjs/toolkit";


const innitialFormState = {
    sport: "padel",
    type: "game",
    location: "",
    court: null,
    started_at_date: "",
    started_at_time: "",
    duration_time: 120,
    price: 0,
    max_players: 4,
    level_min: 1,
    strict_level: false,
};

const initialState = {
    form: { ...innitialFormState },
    players: [],
    status: "idle" // 'idle' | 'loading' | 'succeeded' | 'failed'
};

const createEventSlice = createSlice({
    name: "create",
    initialState,
    reducers: {
        setSport: (state, { payload }) => { state.form.sport = payload },
        setType: (state, { payload }) => { state.form.type = payload },
        setLocation: (state, { payload }) => { state.form.location = payload },
        setLocationUrl: (state, { payload }) => { state.form.location_url = payload },
        setCourt: (state, { payload }) => { state.form.court = payload },
        setStartDate: (state, { payload }) => { state.form.started_at_date = payload },
        setStartTime: (state, { payload }) => { state.form.started_at_time = payload },
        setDuration: (state, { payload }) => { state.form.duration_time = payload },
        setPrice: (state, { payload }) => { state.form.price = payload },
        setMaxPlayers: (state, { payload }) => { state.form.max_players = payload },
        setMinLevel: (state, { payload }) => { state.form.level_min = payload },
        setStrict: (state, { payload }) => { state.form.strict_level = payload },

        addPlayerAction: (state, { payload }) => { state.players = [...state.players, payload] },
        deletePlayerAction: (state, { payload }) => {
            state.players = state.players.filter((p) => p.nickname !== payload)
        },
        changePlayerAction: (state, { payload }) => {
            const newPlayers = state.players.map((p) => {
                if ( p.nickname !== payload.nickname ) return p;

                return { ...p, team: payload.team }; 
            })

            state.players = newPlayers
        },
    }
});

export const {
    setSport,
    setType,
    setLocation,
    setLocationUrl,
    setCourt,
    setStartTime,
    setStartDate,
    setDuration,
    setPrice,
    setMaxPlayers,
    setMinLevel,
    setStrict,
    addPlayerAction,
    deletePlayerAction,
    changePlayerAction,
} = createEventSlice.actions;
export const createEventReducer = createEventSlice.reducer;