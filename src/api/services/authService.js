import { supabase } from "../supabase.js";

export async function signUpService({ email, password, profile }) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: profile }
    });
    console.log(error)
    if (error) throw error;

    return data;
};

export async function getAutharization() {
    const { data: session, error } = await supabase.auth.getSession();

    console.log(session);
    console.log(error);

    if (error) throw new Error(error.message);

    return session;
};