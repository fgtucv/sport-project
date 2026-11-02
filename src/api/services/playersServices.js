import { supabase } from "../supabase.js";

export async function getGamePlayers(gameId) {
    const { data, error } = await supabase
        .from('game_players')
        .select('user_id, team, profiles(id, nickname, avatar_url)')
        .eq('game_id', gameId);

    if (error) throw new Error(error.message);
    
    return data;
}