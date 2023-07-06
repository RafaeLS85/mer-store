"use client";
import api from "@/services/product";
import { useCategoryStore, useSearchStore } from "@/store/store";
import { Product } from "@/types/types";
import { useState, useEffect, useContext } from "react";


export default function useProducts() {
  const { categoryId } = useCategoryStore()
  const { searchTerm } = useSearchStore()
 
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
      api.list({categoryId}).then((res) => {       
        setProducts(res)
      });
      console.log("category change", categoryId)
      // console.log("search term change", searchTerm)
  }, [categoryId]);

  return { products, setProducts };
}
