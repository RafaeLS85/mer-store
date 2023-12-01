import { success } from "@/components/shared/Notify";
import { ChartState } from "@/store/chart";
// import { ChartState } from "@/store/store";
import { Product } from "@/types/types";

interface Props {
    store: ChartState,
    id: string;
    item: Product;
}

export const useChart = ({store, id, item}: Props) => {
    const chartItem = store.chart.find((p) => p.id === id);

    const addToChart = () => {
        if (chartItem) {
            store.increaseQuantity(id)
        } else {     
            store.addToChart({
            ...item,
             quantity: 1
           });
        }
        success("Producto agregado al carrito");
      }

    return {
        chartItem, addToChart
    }
}