import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppStore = create(
  persist(
    (set) => ({
      users: [],

      addUser: (user) =>
        set((state) => ({
          users: [...state.users, user],
        })),
    }),
    {
      name: "users",
    }
  )
);
