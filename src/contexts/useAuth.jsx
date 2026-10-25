import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch.jsx"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // if (JSON.parse(localStorage.getItem(""))){

    // }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("userId")) && JSON.parse(localStorage.getItem("isAuth"))) {
            const userId = JSON.parse(localStorage.getItem("userId"));

            const loadUser = async () => {
                try {
                    const { data } = await axios.get(`https://6aa2acebccb3db9689a6e211.mockapi.io/user/${userId}`);

                    setUser(data);
                } catch (error) {
                    console.log(error.message)
                }
            };

            loadUser();
        }
    }, []);

    const authorization = (userData) => {
        localStorage.setItem("isAuth", JSON.stringify(true));
        localStorage.setItem("userId", JSON.stringify(userData.id));
        navigate("/sport-project");
        setUser(userData);
    };

    const logout = () => {
        localStorage.setItem("isAuth", JSON.stringify(false));
        localStorage.removeItem("userId");
        navigate("/sport-project", { replace: true });
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