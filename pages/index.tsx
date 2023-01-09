import { Inter } from "@next/font/google";
import Layout from "../components/layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import { MenuContext } from "../context/MenuContext";
import { useContext, useEffect } from "react";
import Menu from "../components/Menu/Menu";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { show } = useContext(MenuContext);
  
  return (
    <>
      <Layout title="La tienda de Mer">
        <main >
          <Navbar />

          { show && <Menu /> }

          {!show && (
            <>
              <div className="flex gap-6">
                <div>
                  <img
                    src="https://picsum.photos/200/300"
                    alt="fake-content1"
                  />
                </div>
                <div>
                  <img
                    src="https://picsum.photos/200/300"
                    alt="fake-content2"
                  />
                </div>
                <div>
                  <img
                    src="https://picsum.photos/200/300"
                    alt="fake-content3"
                  />
                </div>
              </div>
            </>
          )}
        </main>
      </Layout>
    </>
  );
}
