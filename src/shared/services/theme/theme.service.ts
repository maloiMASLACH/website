import { create } from "zustand";

import { StorageKeys } from "@shared/constants/storageKeys.ts";

const body = document.querySelector("body");

export type AvailableThemes = "Dark" | "Light";

type ThemeStore = {
  currentTheme: AvailableThemes;
  changeTheme: (newTheme: AvailableThemes) => void;
};

const getCurrentTheme = () => {
  const theme = localStorage.getItem(StorageKeys.Theme);

  if (theme) {
    body!.classList.add(`compliq-${theme.toLowerCase()}`);

    return theme as AvailableThemes;
  }

  return "Light";
};

export const useTheme = create<ThemeStore>()((set, get) => ({
  currentTheme: getCurrentTheme(),

  changeTheme: (newTheme) => {
    const { currentTheme } = get();

    body!.classList.remove(`compliq-${currentTheme.toLowerCase()}`);
    body!.classList.add(`compliq-${newTheme.toLowerCase()}`);
    localStorage.setItem(StorageKeys.Theme, newTheme);

    set((state) => ({
      ...state,
      currentTheme: newTheme,
    }));
  },
}));
