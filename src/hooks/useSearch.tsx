import { Product } from "../types/types";
import React, { useState, useEffect } from "react";
import useProducts from "./useProducts";
import { useSearchStore } from "../store/store";

export const useSearch = () => {
  const { products } = useProducts();
  const { searchTerm } = useSearchStore();
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchTerm) {
      setData(products);
      setError(null);
    }

    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (filteredProducts.length) {
      setData(filteredProducts);
      setError(null);
    } else {
      setError("No results found");
      setData([]);
    }
  }, [searchTerm, products]);
  return { data, error };
};
