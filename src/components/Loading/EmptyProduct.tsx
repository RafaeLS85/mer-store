import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import PageContainer from "../shared/Container";

export default function EmptyProduct() {
  return (
    <PageContainer>
      <Skeleton key="skeleton-detail">
        <Card>
          <CardBody>
            <Image
              src="sdf"
              alt="sdf"
              height={500}
              width={500}
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
        </Card>
      </Skeleton>
    </PageContainer>
  );
}
