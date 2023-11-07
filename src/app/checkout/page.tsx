"use client";
import { IoLogoWhatsapp } from "react-icons/io";
import { CheckoutTable } from "../../components/Checkout";

import { PHONE_NUMBER } from "../../constants/config";
import { useChartStore } from "../../store/store";
import { parseCurrency } from "../../utils";
import Layout from "@/components/Layout/CheckoutLayout";
import PageContainer from "@/components/shared/Container";

export default function CheckoutPage() {
  // comnponente que muestra una tabla donde se listan los productos, se debe poder agregar, restar y eliminar productos.
  // debajo debe mostrar el total a pagar y un boton para realizar el pedido por whatsapp

  const { products, chart } = useChartStore();

  const text = chart
    .reduce(
      (message, product) =>
        message.concat(
          `* ${product.title} -  ${parseCurrency(product.price)}\n`
        ),
      ``
    )
    .concat(
      `\nTotal: ${parseCurrency(
        chart.reduce((total, product) => total + product.price, 0)
      )}`
    );

  return (
    <Layout title="Checkout page">
      <PageContainer>
        <h1>Mi Pedido</h1>

        <CheckoutTable chart={chart} />

        <div>
          Total: ${chart.reduce((total, product) => total + product.price, 0)}
        </div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{
            pointerEvents: !Boolean(chart.length) ? "none" : "unset",
          }}
          href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
            text
          )}`}
        >
          <button
            disabled={!Boolean(chart.length)}
            style={{
              background: "#6C9018",
              borderRadius: "10px",
              padding: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "1rem",
              opacity: Boolean(chart.length) ? "1" : "0.5",
            }}
          >
            <div>Hacer el pedido </div>

            <IoLogoWhatsapp size={25} />
          </button>
        </a>
      </PageContainer>
    </Layout>
  );
}
