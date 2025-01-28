import { create } from "zustand";

interface MyStore {
  isDarkMode: boolean;
  setIsDarkMode: () => void;
  page: string;
  setPage: (page: string) => void;
  work: React.ReactNode | null;
  setWork: (work: React.ReactNode) => void;
}

export const useMyStore = create<MyStore>()((set) => ({
  isDarkMode: false,
  setIsDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  page: "home",
  setPage: (page: string) => set(() => ({ page: page })),
  work: null,
  setWork: (work: React.ReactNode) => set(() => ({ work: work })),
}));
