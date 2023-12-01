"use client";
// import { useSearch } from "../hooks/useSearch";
import "react-toastify/dist/ReactToastify.css";
// import { CategoryStoreInitializer } from "@/components/store";
import Layout from "@/components/Layout/HomeLayout";
import { Box, Container, useColorMode } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { CardItem } from "@/components/CardItem";
import { useProductStore } from "@/store/products";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {  
  const products = useProductStore((state) => state.products ); 
  const { isLoaded } =  useProducts({ products }); 
  const { colorMode, toggleColorMode } = useColorMode();  



  const color = colorMode === "dark" ? "#2D3748" : "lightgray";
  const border = {    
    left: `.1px solid ${color}`,
    right: `.1px solid ${color}`,
  }

  return (
    <Layout title="Products" isLoaded={isLoaded}>
      <Container
        maxW="6xl"
        centerContent        
        borderLeft={border.left}
        borderRight={border.right}
        paddingTop="2rem"
        paddingBottom="2rem"
      >
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} spacing="40px"> 
            {products.map((product) =>
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
