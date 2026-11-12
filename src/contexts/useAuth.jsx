import { createContext, useCallback, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { getSessionService, getProfileService } from "../api/services/authService.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const isAuth = !!user;

// authorization, logout

    return (
        <AuthContext.Provider value={{ user, isAuth,  }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);