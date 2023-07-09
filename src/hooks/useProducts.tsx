"use client";
import api from "@/services/product";
import { useCategoryStore } from "@/store/store";
import { Product } from "@/types/types";
import { useState, useEffect } from "react";

export default function useProducts() {
  const { categoryId } = useCategoryStore(); 
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
      api.list({categoryId}).then((res) => {       
        setProducts(res)
      });
  }, [categoryId]);

  return { products, setProducts };
}
