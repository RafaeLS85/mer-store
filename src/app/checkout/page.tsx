"use client";
import { CheckoutTable } from "../../components/Checkout";
import Layout from "@/components/Layout/CheckoutLayout";
import PageContainer from "@/components/shared/Container";
import { useEffect, useState } from "react";
import { CHECKOUT_PAGE } from "@/constants/checkout";
import { Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import { useChartStore } from "@/store/chart";
import { useRouter } from "next/navigation";
import { CheckoutButton } from "@/components/shared/CheckoutButton";

export default function CheckoutPage() {
  const { chart } = useChartStore();
  const [total, setTotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setTotal(
      chart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      )
    );
  }, [chart]); 

  return (
    <Layout title="Checkout page">
      <PageContainer>
        <Heading as='h2' size='xl' marginBottom="8">{CHECKOUT_PAGE.title}</Heading>
        <CheckoutTable chart={chart} />
        <div>
          {CHECKOUT_PAGE.total}
          {total}
        </div>
        <Flex justifyContent="center" gap="2">
          <ButtonGroup gap="5" alignItems="center" maxWidth="md">         
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => router.push("/")}
            >
              Volver
            </Button>

            <CheckoutButton total={total} />
          </ButtonGroup>
        </Flex>
      </PageContainer>
    </Layout>
  );
}
