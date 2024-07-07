
import create from 'zustand';

interface CountState {
    count: number;
    setCount: (count: number) => void;
}

export const useCountStore = create<CountState>((set) => ({
    count: 0,
    setCount: (count) => set({ count }),
}));
