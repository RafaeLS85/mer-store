"use client";
import Card from "@/components/Card/Card";
import { CategoryStoreInitializer } from "@/components/Store/CategoryStoreInitializer";
import Layout from "@/components/Layout/Layout";
import useProducts from "@/hooks/useProducts";
import { useCategoryStore } from "@/store/store";

export default function Home() {
  const { products } = useProducts();
 
  // const { categoryId } = useCategoryStore()
  
  if (!products.length) return <div className="">Loading...</div>;
  if (products.length === 0 ) return <div className="">No items to show</div>;
 
  return (
    <Layout title="Products">
      <CategoryStoreInitializer categoryId={0} />
      {/* <h1>{categoryId}</h1> */}
          {products.map((product) => (
            product.description ? 
            <Card key={product.id} item={product} />
            : null
          ))}
    </Layout>
  );
}
