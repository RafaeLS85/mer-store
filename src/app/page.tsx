"use client";
import Card from "@/components/Card/Card";
import { CategoryStoreInitializer } from "@/components/Store/CategoryStoreInitializer";
import Layout from "@/components/Layout/Layout";
import useProducts from "@/hooks/useProducts";

export default function Home() {
  const { products } = useProducts();
 
  
  if (!products.length) return <div className="">Loading...</div>;
  if (products.length === 0 ) return <div className="">No items to show</div>;
 
  return (
    <Layout title="Products">
      <CategoryStoreInitializer categoryId={0} />
          {products.map((product) => (
            product.description ? 
            <Card key={product.id} item={product} />
            : null
          ))}
    </Layout>
  );
}
