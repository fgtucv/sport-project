import { supabase } from "../supabase.js";

export async function signUpService({ email, password, profile }) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: profile }
    });

    if (error) throw error;

    return data;
};

export async function SignInService({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) throw error;

    return data;
}

export async function getAutharization() {
    const { data: session, error } = await supabase.auth.getSession();

    if (error) throw new Error(error.message);

    return session;
};