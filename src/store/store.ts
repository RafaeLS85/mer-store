import { create } from 'zustand';

export const useCategoryStore = create<{
    categoryId: number;
}>((set) => ({
    categoryId: 1
}));