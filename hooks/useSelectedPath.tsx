import { useEffect, useState } from "react";
import asPath from "next/router";
import { items } from "../constants/menuItems";

export default function useSelectedPath() {
  const [selectedPath, setSelectedPath] = useState("/");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSelectedPath(asPath.route);
    }
  }, []);

  const getPathFromIndex = (index: number) => {
    const match = items.filter((item) => index === item.id);
    return match[0]?.url;
  };

  return { setSelectedPath, getPathFromIndex, selectedPath };
}
