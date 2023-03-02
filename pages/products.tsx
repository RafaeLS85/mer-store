import Layout from "../components/layout/Layout";
import ProductsPage from "../components/Products/Products";

export default function Products() {
  return (
    <Layout title="Products">
      <main className="">
        <ProductsPage />
      </main>
    </Layout>
  );
}