import { Product } from '@/types/types';
import React, {useState, useEffect} from 'react'
import useProducts from './useProducts';
import { useSearchStore } from '@/store/store';

export const useSearch = () => {
    const { products } = useProducts();
    const { searchTerm } = useSearchStore();
    const [data, setData] = useState<Product[]>([]);

    
  useEffect(() => {
    if (searchTerm) {
      const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
      if (filteredProducts.length) {
        setData(filteredProducts);
      } else {
        setData(products);
      }
    } else {
      setData(products);
    }
  }, [searchTerm, products]);
  return {data}
}
