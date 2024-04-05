import { create } from 'zustand'

export const useGameStore = create((set) => ({
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
// export const useGameStore = create((set) => ({
//   a: null,
//   b: null,
//   setA: (something) => {
//     set((state) => ({ a: something }))
//   }
// }))
