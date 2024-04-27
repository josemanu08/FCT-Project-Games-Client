import { create } from 'zustand'
import playData from '../mocks/NEW_MOCKS/playStationData.json'
import xboxData from '../mocks/NEW_MOCKS/xboxUserData.json'

export const useGameStore = create((set) => ({
  loadingXbox: false,
  loadingPlay: false,
  xboxData,
  playStationData: playData,
  setXboxData: (newData) => {
    set(() => ({ xboxData: newData }))
  },
  setPlaystationData: (newData) => {
    set(() => ({ playStationData: newData }))
  }
})
)
