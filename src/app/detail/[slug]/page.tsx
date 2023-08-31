"use client";
import Layout from "@/components/Layout";
import { AddBtn } from "@/components/shared/AddBtn";
import useProducts from "@/hooks/useProducts";
import { Product } from "@/types/types";
import Image from "next/image";

export default function DetailPage({ params }: { params: { slug: string } }) {
  const { products } = useProducts();
  const product: Product[] = products.filter((x) => x.id === params.slug);

  console.log({ product });

  const addToChart = () => {
    console.log("add");
  };

  return (
    <Layout title="Product" withMenu={false}>
      {!product.length ? (
        <h3>Loading product...</h3>
      ) : (
        <div
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            margin: "20px",
          }}
        >
          <h1> {product[0].title} </h1>
          <Image
            src={product[0].image}
            width={500}
            height={500}
            alt={product[0].title}
          />
          <AddBtn addToChart={addToChart} stock={product[0].stock} />
        </div>
      )}
    </Layout>
  );
}
