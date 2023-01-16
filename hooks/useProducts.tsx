import { useState, useEffect, useContext } from "react";
import api from "../products/service";
import { Product } from "../products/types";
import { ProductContext } from "../context/ProductContext";

export default function useProducts() {
  
  const { data, setData } = useContext(ProductContext);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if(!data.length){
      api.list().then((res) => {       
        setProducts(res)
        setData(res)
      });
    }
  }, []);

  return { products, data, setProducts };
}
