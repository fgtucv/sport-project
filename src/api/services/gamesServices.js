import { supabase } from "../supabase.js";

export async function getGamesService() {
    const { data, error } = await supabase
        .from("games")
        .select("*");

    if (error) return error;

    return data;
};