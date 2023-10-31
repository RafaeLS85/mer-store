import { Product } from '../types/types';
import { create } from 'zustand';

interface ChartState {
    products: Product[];
    addProduct: (product: Product) => void; 
    removeProduct: (index: number) => void;
}

export const useChartStore = create<ChartState>((set) => ({
   products: [],
   addProduct(product:Product){
       set((state) => ({
           ...state,
           products: state.products.concat(product)
       }))
   },
   removeProduct(index: number){
        set((state) => ({
            ...state,            
            // products: state.products.splice( state.products.map(e => e.id).indexOf(product.id) ,1) 
            products: state.products.splice(index ,1) 
        }))
   }
}));

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