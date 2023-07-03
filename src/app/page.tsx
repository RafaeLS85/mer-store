"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/components/layout/Layout";
import useProducts from "@/hooks/useProducts";

export default function Home() {
  const { products } = useProducts();

  if (!products.length) return <div className="">Loading...</div>;

  console.log({ products });

  return (
    <Layout title="Products">
          {products.map((product) => (
            product.description ? 
            <div key={product.id}>{product.description}</div>
            : null
          ))}
    </Layout>
  );
}
