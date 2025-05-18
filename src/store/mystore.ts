import { create } from "zustand";

interface MyStore {
  isDarkMode: boolean;
  setIsDarkMode: () => void;
  page: string;
  setPage: (page: string) => void;
  work:  null | string;
  setWork: (work: string) => void;
}

export const useMyStore = create<MyStore>()((set) => ({
  isDarkMode: false,
  setIsDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  page: "home",
  setPage: (page: string) => set(() => ({ page: page })),
  work: null,
  setWork: (work: string) => set(() => ({ work: work })),
}));
