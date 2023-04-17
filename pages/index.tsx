import { Inter } from "@next/font/google";
import Layout from "../components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

import useProducts from "../hooks/useProducts";

export default function ShopPage() {
  const { data } = useProducts();

  if (!data.length)
    return <div className="text-black  text-lg">Loading...</div>;

  return (
    <Layout title="Shop">
      <main className="text-black ">
        <h1 className="text-3xl font-bold text-black  underline">
          Online Shop
        </h1>
        <ul>
          {data.map((product) => (
            <li key={product.id}>{product.description}</li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
