"use client";

import { useCategoryStore } from "@/store/store";
import { useRef } from "react";

export const CategoryStoreInitializer = ({
    categoryId
}: {
    categoryId: number;
}) => {
  const initialized = useRef(false);

  if (!initialized.current) {
    useCategoryStore.setState({ categoryId });
    initialized.current = true;
  }

  return null;
};
