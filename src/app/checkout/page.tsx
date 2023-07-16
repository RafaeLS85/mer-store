"use client";
import { IoLogoWhatsapp } from "react-icons/io";
import { CheckoutTable } from "../../components/Checkout/CheckoutTable";
import Layout from "../../components/Layout/Layout";
import { PHONE_NUMBER } from "../../constants/config";
import { useChartStore } from "../../store/store";
import { parseCurrency } from "../../utils";

export default function CheckoutPage() {
  // comnponente que muestra una tabla donde se listan los productos, se debe poder agregar, restar y eliminar productos.
  // debajo debe mostrar el total a pagar y un boton para realizar el pedido por whatsapp

  const { products } = useChartStore();

  const text = products
    .reduce(
      (message, product) =>
        message.concat(
          `* ${product.title} -  ${parseCurrency(product.price)}\n`
        ),
      ``
    )
    .concat(
      `\nTotal: ${parseCurrency(
        products.reduce((total, product) => total + product.price, 0)
      )}`
    );

  return (
    <Layout title="Checkout page">
      <div
        style={{
          flexDirection: "column",
          gap: "2rem",

          gridColumn: "1/-1",
        }}
      >
        <h1>Mi Pedido</h1>

        <CheckoutTable products={products} />

        <div>
          Total: ${products.reduce((total, product) => total + product.price, 0)}
        </div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{
            pointerEvents: !Boolean(products.length) ? "none" : "unset",
          }}
          href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
            text
          )}`}
        >
          <button
            disabled={!Boolean(products.length)}
            style={{
              background: "#6C9018",
              borderRadius: "10px",
              padding: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "1rem",
              opacity: Boolean(products.length) ? "1" : "0.5",
            }}
          >
            <div>Hacer el pedido </div>

            <IoLogoWhatsapp size={25} />
          </button>
        </a>
      </div>
    </Layout>
  );
}
