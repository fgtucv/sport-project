import { createContext, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { getAutharization } from "../api/services/authService.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function loadingUser() {
            try {
                const { session } = await getAutharization();

                setUser(session.user.user_metadata);
            } catch (error) {
                console.log(error)
            }
        }

        loadingUser()
    }, []);

    const authorization = (userData) => {
        console.log(userData)
        navigate("/");
        setUser(userData);
    };

    const logout = () => {
        navigate("/", { replace: true });
        setUser(null);
    };

    const isAuth = !!user;

    return (
        <AuthContext.Provider value={{ user, isAuth, authorization, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);