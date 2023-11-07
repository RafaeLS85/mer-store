import { Chart, Product } from "../types/types";
import { create } from "zustand";

interface ChartState {
  products: Product[];
  chart: Chart[];
  addProduct: (product: Product) => void;
  removeProduct: (index: string) => void;
  addToChart: (chart: Chart) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

export const useChartStore = create<ChartState>((set) => ({
  products: [],
  chart: [],
  addProduct(product: Product) {
    set((state) => ({
      ...state,
      products: state.products.concat(product),
    }));
  },
  removeProduct(id: string) {
    set((state) => ({
     ...state,
      chart: state.chart.filter((item, i) => item.id !== id),
    }));
  },
  addToChart(chart: Chart) {    
    set((state) => ({
     ...state,
      chart: state.chart.concat(chart),
    }));
  },
  increaseQuantity(id: string) {
    set((state) => ({
        ...state,
          chart: state.chart.map((item) => {
            if (item.id === id) {              
              const isAvailable = (item.quantity + 1) <= item.stock;
              return {
              ...item,
                quantity: isAvailable ? item.quantity + 1 : item.quantity,
              };
            }
            return item;
          }),
        }));
  },
  decreaseQuantity(id: string){    
    set((state) => ({
        chart: state.chart.map((item) => {
          if (item.id === id) {
            const decreaseQuantity = (item: Chart) => {
              if(item.quantity >= 1){
                if(item.quantity === 1){
                  return item.quantity
                }
                return item.quantity - 1;
              }
              return item.quantity;
            }
            return {
            ...item,
            quantity: decreaseQuantity(item),
            };
          }
          return item;
        }),
      }));  
  },
}));

export const useCategoryStore = create<{
  categoryId: number;
}>((set) => ({
  categoryId: 0,
}));

export const useSearchStore = create<{
  searchTerm: string;
}>((set) => ({
  searchTerm: "",
}));

export const useModal = create<{
  isOpen: boolean;
  item?: Product;
}>((set) => ({
  isOpen: false,
}));

export const useDetail = create<{
  item?: Product;
}>((set) => ({}));
