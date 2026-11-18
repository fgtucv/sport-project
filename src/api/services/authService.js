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
};

export async function signOutService() {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
};

export async function getSessionService() {
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error) throw error;

    return session;
};

export async function getProfileService(userId) {
    const { data, error } = await supabase
        .from("profiles").select("*").eq("id", userId).single();

    if (error) throw error;

    return data;
};

export function subscribeToAuthService(dispatch, setSession) {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (event, session) => {
            dispatch(setSession(session));
        }
    );

    return () => subscription.unsubscribe();
};