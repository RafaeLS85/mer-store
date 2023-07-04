import api from "@/services/product";
import { Product } from "@/types/types";
import { useState, useEffect, useContext } from "react";


// import { ProductContext } from "../context/ProductContext";

export default function useProducts() {
  
  // const { data, setData } = useContext(ProductContext);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    
      api.list().then((res) => {       
        setProducts(res)
        // setData(res)
      });
    
  }, []);

  return { products, setProducts };
}
