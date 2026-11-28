// upcoming
export const selectUpcomingGames = state => state.games.upcoming.games;
export const selectUpcomingStatus = state => state.games.upcoming.status;
export const selectUpcomingError = state => state.games.upcoming.error;
// past
export const selectPastGames = state => state.games.past.games;
export const selectPastStatus = state => state.games.past.status;
export const selectPastError = state => state.games.past.error;