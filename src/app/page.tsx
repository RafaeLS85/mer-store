"use client";

import { useSearch } from "../hooks/useSearch";
import "react-toastify/dist/ReactToastify.css";

import { CategoryStoreInitializer } from "@/components/store";
import Layout from "@/components/Layout";

import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
// import { ToastContainer } from 'react-toastify';
import { SimpleGrid } from "@chakra-ui/react";
import { CardItem } from "@/components/CardItem";

export default function Home() {
  const { data, error } = useSearch();
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
    <Layout title="Products">
      <CategoryStoreInitializer categoryId={0} />

      <Container
        maxW="6xl"
        centerContent
        border="1px solid #4A5568"
        paddingTop="2rem"
        paddingBottom="2rem"
      >
        {/* <Box padding='4' bg='blue.400' color='black' maxW='xl'> */}

        {/* <SimpleGrid columns={{sm: 1, md: 2, lg: 4, xl: 5  }} spacing='40px'> */}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} spacing="40px">
          {!data && <div>Loading...</div>}
          {error && <div>{error}</div>}

          {data.map((product) =>
            product.description ? (
              <Box key={product.id}>
                <CardItem item={product} />
              </Box>
            ) : null
          )}
        </SimpleGrid>

        {/* </Box> */}
      </Container>
    </Layout>
  );
}
