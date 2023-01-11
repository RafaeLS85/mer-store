import { Inter } from "@next/font/google";
import Layout from "../components/layout/Layout";
import HomePage from "../components/Home/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <>
      <Layout title="La tienda de Mer">
        <main >
          <HomePage />
        </main>
      </Layout>
    </>
  );
}
