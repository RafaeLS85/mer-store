import { create } from "zustand";
import { Product } from "../types/types";
import api from "@/services/product";

interface ProductState { 
    products: Product[];  
    fetchProducts: () => void;
}

export const useProductStore = create<ProductState>((set, get) => {  
  return {
    products: [],
    fetchProducts: async () => {

      const { products } = get();

      if(products.length === 0 ){          
        const res = await api.list();
        set({ products: res })
      }     

      if(products.length > 0){
        set({ products});        
      }                  
    }     
  }
})
