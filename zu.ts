import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface StoreState {
  counter: number;
  isLoading: boolean;
  increaseCounter: () => Promise<void>;
  resetCounter: () => void;
  fetchHeightFromSecondStore: () => void; // Add this function
}
async function fetchData() {
  try {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
  }
}
const useCounter = create<StoreState>((set) => ({
  counter: 0,
  isLoading: false,
  increaseCounter: async () => {
    set({ isLoading: true });
    const res = await fetchData();
    console.log(res);

    set({ isLoading: false });

    // set((state) => ({ counter: state.counter + 1 }));
  },
  resetCounter: () => set({ counter: 0 }),
  fetchHeightFromSecondStore: () => {
    const height = useSecondStore.getState().height;
    console.log("Fetched height from second store:", height);
  },
}));

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
