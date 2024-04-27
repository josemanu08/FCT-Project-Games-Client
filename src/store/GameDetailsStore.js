import { create } from 'zustand'

export const useGameDetailsStore = create((set) => ({
  gameDetail: [],
  setGameDetail: (data) => {
    set(() => ({ gameDetail: data }))
  }
}))
