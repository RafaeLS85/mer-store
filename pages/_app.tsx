import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MenuContext } from "../context/MenuContext";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Menu from "../components/Menu/Menu";

export default function App({ Component, pageProps }: AppProps) {
  const [show, setShow] = useState(false);

  return (
    <MenuContext.Provider value={{ show, setShow }}>
      <Navbar />
      {show && <Menu />}
      {!show && <Component {...pageProps} />}
    </MenuContext.Provider>
  );
}
