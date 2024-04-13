import { create } from 'zustand'

export const useGameStore = create((set) => ({
  loadingXbox: false,
  loadingPlay: false,
  xboxData: null,
  playStationData: null,
  setXboxData: (newData) => {
    set(() => ({ xboxData: newData }))
  },
  setPlaystationData: (newData) => {
    set(() => ({ playStationData: newData }))
  }
})
)
