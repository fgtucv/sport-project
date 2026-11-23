import { supabase } from "../supabase.js";

export async function getUpcomingGamesService() {
    const { data, error } = await supabase
        .from("games")
        .select("*")
        .gt("started_at", new Date().toISOString());

    if (error) return error;

    return data;
};

export async function getMyPassedGamesService(playerId) {
    const { data, error } = await supabase
        .from("games")
        .select("*")
        // .select(`*, game_players!inner (user_id)`)
        // .eq("game_players.user_id", playerId)
        .lt("started_at", new Date().toISOString());

    if (error) throw new Error(error.message);

    return data;
};

export async function joinToGameService(playerId, gameId) {
    const { error } = await supabase
        .from('game_players')
        .insert({ game_id: gameId, user_id: playerId });

    if (error) {
        throw error;
    };

    return { success: true };
};

export async function createGameService(newGame) {
    const { data, error } = await supabase
        .from("games")
        .insert(newGame)
        .select('id')
        .single();

    if (error) throw error;

    return { gameId: data, success: true };
}