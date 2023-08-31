import { Product } from '../types/types';
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
    products: Product[]
}>((set) => ({
    products: [],
}));



export const useModal = create<{
    isOpen: boolean,
    item?: Product
}>((set) => ({
    isOpen: false
}));

export const useDetail = create<{
    item?: Product
}>((set) => ({
}));