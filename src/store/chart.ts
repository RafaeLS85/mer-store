import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Chart } from "../types/types";

export interface ChartState {
  chart: Chart[];
  addToChart: (chart: Chart) => void;
  removeProduct: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

export const useChartStore = create<ChartState>()(
  persist(
    (set, get) => {
      return {
        chart: [],
        addToChart: (chart: Chart) => {
          set((state) => ({
            ...state,
            chart: state.chart.concat(chart),
          }));
        },
        removeProduct: (id: string) => {
          set((state) => ({
            ...state,
            chart: state.chart.filter((item, i) => item.id !== id),
          }));
        },
        increaseQuantity: (id: string) => {
          set((state) => ({
            ...state,
            chart: state.chart.map((item) => {
              if (item.id === id) {
                const isAvailable = item.quantity + 1 <= item.stock;
                return {
                  ...item,
                  quantity: isAvailable ? item.quantity + 1 : item.quantity,
                };
              }
              return item;
            }),
          }));
        },
        decreaseQuantity: (id: string) => {
          set((state) => ({
            chart: state.chart.map((item) => {
              if (item.id === id) {
                const decreaseQuantity = (item: Chart) => {
                  if (item.quantity >= 1) {
                    if (item.quantity === 1) {
                      return item.quantity;
                    }
                    return item.quantity - 1;
                  }
                  return item.quantity;
                };
                return {
                  ...item,
                  quantity: decreaseQuantity(item),
                };
              }
              return item;
            }),
          }));
        },
      };
    },
    {
      name: "chart",
    }
  )
);
