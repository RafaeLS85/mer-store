"use client";

import { useSearch } from "../hooks/useSearch";
import "react-toastify/dist/ReactToastify.css";

import { CategoryStoreInitializer } from "@/components/store";
import Layout from "@/components/Layout/HomeLayout";

import { Box, Container, Grid, GridItem, Skeleton } from "@chakra-ui/react";
// import { ToastContainer } from 'react-toastify';
import { SimpleGrid } from "@chakra-ui/react";
import { CardItem } from "@/components/CardItem";


export default function Home() {
  const { data, error, isLoaded } = useSearch();
  console.log({ data });

  // const breakpoints = {
  //   base: "0em", // 0px
  //   sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  //   md: "48em", // ~768px
  //   lg: "62em", // ~992px
  //   xl: "80em", // ~1280px
  //   "2xl": "96em", // ~1536px
  // };

  return (
    <Layout title="Products" isLoaded={isLoaded}>

      <CategoryStoreInitializer categoryId={0} />

      <Container
        maxW="6xl"
        centerContent
        border="1px solid #4A5568"
        paddingTop="2rem"
        paddingBottom="2rem"
      >
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} spacing="40px"> 
            {data.map((product) =>
              product.description ? (
                <Box key={product.id}>
                  <CardItem item={product} />
                </Box>
              ) : null
            )}
          </SimpleGrid>     
      </Container>
    </Layout>
  );
}
