import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../types/types";
import api from "@/services/product";

interface ProductState { 
    products: Product[];  
    fetchProducts: () => void;
}

export const useProductStore = create<ProductState>()(persist((set, get) => {  
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
}, {
  name: 'products'
}))
