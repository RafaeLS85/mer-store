import { create } from 'zustand';

export const useCategoryStore = create<{
    categoryId: number;
}>((set) => ({
    categoryId: 0
}));


export const useSearchStore = create<{
    searchTerm: string;
}>((set) => ({
    searchTerm: ''
}));