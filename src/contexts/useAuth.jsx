import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const authorization = (userData) => { setUser(userData) };
    const logout = () => { setUser(null) };

    const isAuth = !!user;

    return (
        <AuthContext.Provider value={{ user, isAuth, authorization, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);