import { Chart, Product } from "../types/types";

export function parseCurrency(value: number): string {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
}

export const calculateTotal = (items: Product[]) => {
  let reduce = items.reduce((acc, item) => acc + item.price, 0);

  return reduce
}

export const disabled = (item: Chart | undefined, stock:number) => {
  if (item?.quantity === stock ){
    return true
  }
  if(!Boolean(stock)){
    return true
  }
  return false
}

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const cutString = (str: string, long: number ) => {
  if(str.length > long ){
    return str.slice(0, long) + '...';
  }
  return str
}
