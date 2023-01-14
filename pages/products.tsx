import { GetStaticProps } from "next";
import Layout from "../components/layout/Layout";
import api from "../products/service";
import { Product } from "../products/types";

interface Props {
  products: Product[];
}

export default function Products({ products }: Props) {
  if (!products) return <div>Loading...</div>;

  console.log({ products });

  return (
    <Layout title="Products">
      <main className="text-black ">
        <h1 className="text-3xl font-bold text-black  underline">Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.description}</li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();

  return {
    props: {
      products,
    },
  };
};
