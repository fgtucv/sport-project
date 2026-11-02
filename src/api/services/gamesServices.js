import { supabase } from "../supabase.js";

export async function getGamesService() {
    const { data, error } = await supabase
        .from("games")
        .select("*");

    if (error) throw new Error(error.message);

    return data; // games
};