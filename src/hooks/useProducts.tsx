"use client";
import api from "@/services/product";
import { useCategoryStore } from "@/store/store";
import { Product } from "@/types/types";
import { useState, useEffect, useContext } from "react";


// import { ProductContext } from "../context/ProductContext";

export default function useProducts() {
  const { categoryId } = useCategoryStore()
 
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    
      api.list(categoryId).then((res) => {       
        setProducts(res)
      });

      console.log("category change", categoryId)
    
  }, [categoryId]);

  return { products, setProducts };
}
