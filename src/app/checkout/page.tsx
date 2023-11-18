"use client";
import { IoLogoWhatsapp } from "react-icons/io";
import { CheckoutTable } from "../../components/Checkout";
import { PHONE_NUMBER } from "../../constants/config";
// import { useChartStore } from "../../store/store";
import { parseCurrency } from "../../utils";
import Layout from "@/components/Layout/CheckoutLayout";
import PageContainer from "@/components/shared/Container";
import { useEffect, useState } from "react";
import { CHECKOUT_PAGE } from "@/constants/checkout";
import { Heading } from "@chakra-ui/react";
import { useChartStore } from "@/store/chart";

export default function CheckoutPage() {
  const { chart } = useChartStore();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      chart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      )
    );
  }, [chart]);

  const text = chart
    .reduce(
      (message, product) =>
        message.concat(
          `* ${product.title} -  ${parseCurrency(product.price)}\n`
        ),
      ``
    )
    .concat(`\nTotal: ${parseCurrency(total)}`);

  return (
    <Layout title="Checkout page">
      <PageContainer>
        <Heading as='h2' size='xl' marginBottom="8">{CHECKOUT_PAGE.title}</Heading>

        <CheckoutTable chart={chart} />

        <div>
          {CHECKOUT_PAGE.total}
          {total}
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
            <div>{CHECKOUT_PAGE.buttonLabel}</div>

            <IoLogoWhatsapp size={25} />
          </button>
        </a>
      </PageContainer>
    </Layout>
  );
}
