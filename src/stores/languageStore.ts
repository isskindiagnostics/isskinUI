import { create } from "zustand";

type LanguageStore = {
  language: "en" | "pt";
  setLanguage: (lang: "en" | "pt") => void;
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: "en",
  setLanguage: (lang) => set({ language: lang }),
}));
