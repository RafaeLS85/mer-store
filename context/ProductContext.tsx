import { createContext } from 'react'
import { Product } from '../products/types';
interface ProductContextInterface {
    data: Product[];
    setData: (products:Product[]) => void
  }
export const  ProductContext = createContext<ProductContextInterface>({data: [], setData: () => {}})