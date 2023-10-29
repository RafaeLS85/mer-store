import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function EmptyCard({ quantity }: { quantity: number }) {

  const arr = Array.from({ length: quantity }, (_, index) => index + 1)

  return (
    <Container
      maxW="6xl"
      centerContent
      border="1px solid #4A5568"
      paddingTop="2rem"
      paddingBottom="2rem"
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} spacing="40px">
        {arr.map((el, id) => (
          <Box key={id}>
            <Card maxW="sm" backgroundColor="#4A5568">
              <Skeleton key={id}>
                <CardBody>
                  <Image
                    src="sdf"
                    alt="sdf"
                    height={300}
                    width={300}
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">skeleton</Heading>
                    <Text>skeleton</Text>
                    <Text color="blue.600" fontSize="2xl">
                      $0
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Skeleton>
            </Card>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
