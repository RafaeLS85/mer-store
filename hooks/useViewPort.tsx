// 'use client';

import { useEffect, useState } from "react";


export const useViewPort = () => {
    const [dimensions, setDimensions] = useState(0);

      useEffect(() => {
        const handleResize = () => {
          console.log(dimensions);
          setDimensions(window.innerWidth);
          window.addEventListener("load", handleResize, false);
          window.addEventListener("resize", handleResize, false);
        };
      });

      return {
        dimensions, setDimensions
      }
}