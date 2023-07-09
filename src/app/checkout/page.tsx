"use client";

import Card from "@/components/Card/Card";
import { ChartContainer } from "@/components/Chart/Container";
import Layout from "@/components/Layout/Layout";
import { useChartStore } from "@/store/store";
import { Product } from "@/types/types";
import { IoLogoWhatsapp } from "react-icons/io";

export default function CheckoutPage() {
  // comnponente que muestra una tabla donde se listan los productos, se debe poder agregar, restar y eliminar productos.
  // debajo debe mostrar el total a pagar y un boton para realizar el pedido por whatsapp

  const { products, user, total } = useChartStore();

  const ShowProducts = ({ products }: { products: Product[] }) => {
    return (
      <>
        {
          // products.map((product) =>
          //             product.description ? <Card key={product.id} item={product} /> : null)
        }
      </>
    );
  };

  return (
    <Layout title="Checkout page">
      <div
        style={{
          // display: 'flex',
          // height: '100vh',
          flexDirection: "column",
          gap: "2rem",

          gridColumn: "1/-1",
          // minWidth: '500px'
        }}
      >
        <h1>Mi Pedido</h1>

        <ChartContainer products={products} />

        <div>Total: {total}</div>

        <button
          style={{
            background: "#6C9018",
            borderRadius: "10px",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem",
          }}
        >
            <div>Hacer el pedido </div>
          
          <IoLogoWhatsapp size={25} />
        </button>
      </div>
    </Layout>
  );
}
