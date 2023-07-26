"use client";



import { useSearch } from "../hooks/useSearch";
import 'react-toastify/dist/ReactToastify.css';

import { CategoryStoreInitializer } from "@/components/store";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
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
