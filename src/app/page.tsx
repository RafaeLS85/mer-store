"use client";
// import { useSearch } from "../hooks/useSearch";
import "react-toastify/dist/ReactToastify.css";
// import { CategoryStoreInitializer } from "@/components/store";
import Layout from "@/components/Layout/HomeLayout";
import { Box, Container } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { CardItem } from "@/components/CardItem";
import { useProductStore } from "@/store/products";
import { useProducts } from "@/hooks/useProducts";


export default function Home() {
  // const { data, error, isLoaded } = useSearch();
  // const [isLoaded, setIsLoaded] = useState(false)
  const products = useProductStore((state) => state.products )  
  const { isLoaded } =  useProducts({ products })  

  return (
    <Layout title="Products" isLoaded={isLoaded}>

      {/* <CategoryStoreInitializer categoryId={0} /> */}

      <Container
        maxW="6xl"
        centerContent
        border="1px solid #4A5568"
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
