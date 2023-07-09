"use client";
import Card from "@/components/Card/Card";
import { CategoryStoreInitializer } from "@/components/Store/CategoryStoreInitializer";
import Layout from "@/components/Layout/Layout";
import { useSearch } from "@/hooks/useSearch";

export default function Home() {
  const { data, error } = useSearch();
  console.log({ data });

  return (
    <Layout title="Products">
      <CategoryStoreInitializer categoryId={0} />
      {!data && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data.map((product) =>
        product.description ? <Card key={product.id} item={product} /> : null
      )}
    </Layout>
  );
}
