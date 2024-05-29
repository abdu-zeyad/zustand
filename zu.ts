import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface StoreState {
  counter: number;
  increaseCounter: () => void;
  resetCounter: () => void;
}

const useCounter = create(
  persist<StoreState>(
    (set) => ({
      counter: 0,
      increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
      resetCounter: () => set({ counter: 0 }),
    }),
    {
      name: "state",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useCounter;
