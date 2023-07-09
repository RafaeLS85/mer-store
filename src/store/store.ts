import { Product } from '@/types/types';
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

export const useChartStore = create<{
    user: string;
    products: Product[]
    total: number;
}>((set) => ({
    user: 'user',
    products: [],
    total: 0
}));