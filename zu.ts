import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface StoreState {
  counter: number;
  increaseCounter: () => void;
  resetCounter: () => void;
  fetchHeightFromSecondStore: () => void; // Add this function
}

const useCounter = create(
  persist<StoreState>(
    (set) => ({
      counter: 0,
      increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
      resetCounter: () => set({ counter: 0 }),
      fetchHeightFromSecondStore: () => {
        const height = useSecondStore.getState().height;
        console.log("Fetched height from second store:", height);
      },
    }),
    {
      name: "state",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

interface SecondStoreState {
  height: number;
  increaseHeight: () => void;
}

const useSecondStore = create(
  persist<SecondStoreState>(
    (set) => ({
      height: 0,
      increaseHeight: () => set((state) => ({ height: state.height + 10 })),
    }),
    {
      name: "store2",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export { useSecondStore, useCounter };
