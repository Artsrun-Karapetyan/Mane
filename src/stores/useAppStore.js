import { create } from 'zustand'

export const useAppStore = create((set) => ({
  // Initial value 1
  count: 0,
  // Initial value 2
  name: 'Mane',
  
  // Actions to update state
  setCount: (count) => set({ count }),
  setName: (name) => set({ name }),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

