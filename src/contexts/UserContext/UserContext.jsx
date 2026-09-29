import { createContext, useState, useEffect } from "react";

export const LoginedUserContext = createContext(null);

export const LoginedUserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://6aa2acebccb3db9689a6e211.mockapi.io/user/${userId}`
        );
        const data = await response.json();

        setUserData(data);
      } catch (error) {
        console.error("Помилка завантаження даних користувача:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <LoginedUserContext.Provider value={{ userData, setUserData, loading }}>
      {children}
    </LoginedUserContext.Provider>
  );
};