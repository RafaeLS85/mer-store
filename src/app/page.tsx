"use client";
import Card from "@/components/Card/Card";
import { CategoryStoreInitializer } from "@/components/Store/CategoryStoreInitializer";
import Layout from "@/components/Layout/Layout";
import { useSearch } from "@/hooks/useSearch";

export default function Home() {
  const {data} = useSearch()

  if (!data.length) return <div className="">Loading...</div>;
  if (data.length === 0) return <div className="">No items to show</div>;

  return (
    <Layout title="Products">
      <CategoryStoreInitializer categoryId={0} />
      {data.map((product) =>
        product.description ? <Card key={product.id} item={product} /> : null
      )}
    </Layout>
  );
}
