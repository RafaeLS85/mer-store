"use client";
import Layout from "@/components/Layout/DetailLayout";
import PageContainer from "@/components/shared/Container";
import { ImagesContainer } from "@/components/shared/ImagesContainer";
import { fallback500 } from "@/constants/images";
import { useChart } from "@/hooks/useChart";
// import useProducts from "@/hooks/useProducts";
import { useChartStore } from "@/store/chart";
import { useProductStore } from "@/store/products";
// import { useChartStore } from "@/store/store";
import { Product } from "@/types/types";
import { disabled } from "@/utils";
import { Button, ButtonGroup, Container, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DetailPage({ params }: { params: { slug: string } }) {
  // const { products } = useProducts();
  const products = useProductStore((state) => state.products )
  const product: Product[] = products.filter((x) => x.id === params.slug);

  const chartState = useChartStore();
  const { id, price, title, stock, description, images_list } = product[0] || [];
  const router = useRouter();
  const {chartItem, addToChart} = useChart({store:chartState, id, item:product[0]})
  const isDisabled = disabled(chartItem, stock)


  const containerProps = {
    justifyContent:'center',
    alignItems:'center',
    gap: 2
  }

  return (
    <>
      <Layout title="Product" isLoaded={Boolean(product.length)}>
        <PageContainer>
          <Heading>{title?.toUpperCase()}</Heading>
          <Text lineHeight="10" fontSize='md'>{description}</Text>
          
          <ImagesContainer images={images_list} containerProps={containerProps} />  
           
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
                  isDisabled={isDisabled}
                >
                  Agregar
                </Button>
                <Button
                  variant="outline"
                  colorScheme="yellow"
                  onClick={() => router.push("/checkout")}
                  isDisabled={!Boolean(chartState.chart.length)}
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
