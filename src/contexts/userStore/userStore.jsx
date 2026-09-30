import axios from "axios";
import { create } from "zustand";

export const userStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,

  fetchUser: async () => {
    const userId = localStorage.getItem("userId").replace(/^"|"$/g, "");

    set({ isLoading: true });

    try {
      const response = await axios.get(`https://6aa2acebccb3db9689a6e211.mockapi.io/user/${userId}`);

      set({user: response.data, isLoading: false});
    } catch (error) {
      console.error(error);
      set({isLoading: false, error: error.response?.data || error.message});
    }
  },

  setUser: (newUser) => set({user: newUser})
}));