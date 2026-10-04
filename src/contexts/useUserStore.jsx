import axios from "axios";
import { create } from "zustand";

const USER_API_URL = "https://6aa2acebccb3db9689a6e211.mockapi.io/user";

export const useUserStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,

  fetchUser: async () => {
    const rawUserId = localStorage.getItem("userId");

    if (!rawUserId) {
      set({ 
        error: "User ID відсутній у localStorage", 
        isLoading: false 
      });
      return;
    }

    const userId = rawUserId.replace(/^"|"$/g, "");

    set({ isLoading: true, error: null });

    try {
      const response = await axios.get(`${USER_API_URL}/${userId}`);

      set({ user: response.data });
    } catch (error) {
      console.error("Помилки при запиті користувача:", error);

      set({ error: error.response?.data || error.message });
    } finally {

      set({ isLoading: false });
    }
  },

  setUser: (newUser) => set({ user: newUser })
}));