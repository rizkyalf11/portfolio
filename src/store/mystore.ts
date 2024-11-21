import { create } from 'zustand'

interface MyStore {
  isDarkMode: boolean
  setIsDarkMode: () => void
}

export const useMyStore = create<MyStore>()((set) => ({
  isDarkMode: false,
  setIsDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode }))
}))