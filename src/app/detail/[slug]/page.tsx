"use client";
import Layout from "@/components/Layout/DetailLayout";
import PageContainer from "@/components/shared/Container";
import { success } from "@/components/shared/Notify";
import useProducts from "@/hooks/useProducts";
import { useChartStore } from "@/store/store";
import { Product } from "@/types/types";
import { Button, ButtonGroup, Container, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DetailPage({ params }: { params: { slug: string } }) {
  const { products } = useProducts();
  const product: Product[] = products.filter((x) => x.id === params.slug);
  const chartState = useChartStore();
  const { id, price, title, image, stock, description } = product[0] || [];
  const router = useRouter();
  // console.log({ product });

  const addToChart = () => {
    const found = chartState.chart.find((p) => p.id === id);
    if (found) {
      chartState.increaseQuantity(id);
    } else {
      chartState.addToChart({
        ...product[0],
        quantity: 1,
      });
    }
    success("Producto agregado al carrito");
  };

  return (
    <>
      <Layout title="Product" isLoaded={Boolean(product.length)}>
        <PageContainer>
          <Heading>{title?.toUpperCase()}</Heading>
          <Text lineHeight="10" fontSize='md'>{description}</Text>
          <Image src={image} width={500} height={500} alt={title} />
          <Container paddingTop="2rem" paddingBottom="2rem">
            <Flex justifyContent="center" gap="2">
              <ButtonGroup gap="5" alignItems="center" maxWidth="md">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={() => router.push("/")}
                >
                  Volver
                </Button>
                <Button
                  variant="solid"
                  colorScheme="green"
                  onClick={addToChart}
                >
                  Agregar
                </Button>
                <Button
                  variant="outline"
                  colorScheme="yellow"
                  onClick={() => router.push("/checkout")}
                >
                  Mi pedido
                </Button>
              </ButtonGroup>
            </Flex>
          </Container>
        </PageContainer>
      </Layout>
      <ToastContainer />
    </>
  );
}
