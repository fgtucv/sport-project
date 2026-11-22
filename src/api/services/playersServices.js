import { supabase } from "../supabase.js";

export async function getGamePlayers(gameId) {
    const { data: players, error } = await supabase
        .from('game_players')
        .select('user_id, team, profiles(id, nickname, avatar_url)')
        .eq('game_id', gameId);

    if (error) return error;
    
    return { gameId, players };
};

export async function cheackPlayerService(nickname) {
    const { data, error } = await supabase
        .from('profiles')
        .select('id')
        .eq('nickname', nickname);

    if (error) throw error;
    if (!data || data.length === 0) throw new Error("Player is not found");

    return { success: true, player: { id: data[0].id, nickname} };
};