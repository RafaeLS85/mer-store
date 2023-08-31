"use client";
import { Product } from "@/types/types";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  item: Product
}

export const CardItem = ({ item }: Props) => {
  const { category, description, id, image, price, stock, title } = item;
 
  console.log("CardItem:" , item)
  return (
    <Card maxW="sm"backgroundColor="#4A5568">
      <CardBody >
        <Image
          src={image}
          alt={title}
          height={300}
          width={300}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title.toUpperCase()}</Heading>
          <Text>
            { description }
          </Text>
          <Text color="blue.600" fontSize="2xl">
            ${ price }
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
  );
};
