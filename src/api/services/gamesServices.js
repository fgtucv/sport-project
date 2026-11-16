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
}