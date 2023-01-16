import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MenuContext } from "../context/MenuContext";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Menu from "../components/Menu/Menu";
import { ProductContext } from "../context/ProductContext";
import useProducts from "../hooks/useProducts";

export default function App({ Component, pageProps }: AppProps) {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { products, setProducts } = useProducts();

  return (
    <MenuContext.Provider value={{ show, setShow, expanded, setExpanded }}>
      <ProductContext.Provider value={{ data: products, setData: setProducts }}>
        <Navbar />
        {show && <Menu />}
        {!show && <Component {...pageProps} />}
      </ProductContext.Provider>
    </MenuContext.Provider>
  );
}
