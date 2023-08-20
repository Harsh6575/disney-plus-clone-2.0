import { create } from "zustand";

const useStore = create((set) => ({
    user: localStorage.getItem("userinfo") || false,
    filter: "all",
    movies: [],
    setUser: (user) => set({ user }),
    logout: () => set({ user: false }),
    showMarvel: () => set({ filter: "marvel" }),
    showPixar: () => set({ filter: "pixar" }),
    showStarWars: () => set({ filter: "starwars" }),
    showNational: () => set({ filter: "national" }),
    showStarSpecials: () => set({ filter: "starspecials" }),
    showAll: () => set({ filter: "all" }),
    setMovies: (movies) => set({ movies }),
    clearAll: () => set({ movies: [] }),
}));

export default useStore;