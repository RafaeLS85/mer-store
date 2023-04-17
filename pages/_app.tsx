import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar";
import { ProductContext } from "../context/ProductContext";
import useProducts from "../hooks/useProducts";

export default function App({ Component, pageProps }: AppProps) {
 
  const { products, setProducts } = useProducts();

  return (
      <ProductContext.Provider value={{ data: products, setData: setProducts }}>
        <Navbar />
        <Component {...pageProps} />
      </ProductContext.Provider>
  );
}
