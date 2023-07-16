"use client";



import { useSearch } from "../hooks/useSearch";
import 'react-toastify/dist/ReactToastify.css';
import Card from "@/components/card/Card";
import { CategoryStoreInitializer } from "@/components/store/CategoryStoreInitializer";
import Layout from "@/components/layout/Layout";
// import { ToastContainer } from 'react-toastify';
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
