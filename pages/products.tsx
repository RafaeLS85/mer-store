import Layout from "../components/layout/Layout";
import useProducts from "../hooks/useProducts";

export default function Products() {
  const { data } = useProducts();

  if (!data.length)
    return <div className="text-black  text-lg">Loading...</div>;

  return (
    <Layout title="Products">
      <main className="text-black ">
        <h1 className="text-3xl font-bold text-black  underline">Products</h1>
        <ul>
          {data.map((product) => (
            <li key={product.id}>{product.description}</li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
