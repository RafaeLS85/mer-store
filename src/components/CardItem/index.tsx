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
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { ModalComponent } from "../Modal";
import { useChartStore } from "@/store/store";

interface Props {
  item: Product
}

export const CardItem = ({ item }: Props) => {
  const { category, description, id, image, price, stock, title } = item;
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const chartState = useChartStore();

  console.log('chartState:', chartState)

  const handleClick = () => {
    console.log("add to cart item")
    chartState.addProduct(item)
  }

  return (
   <>
    <Card maxW="sm"backgroundColor="#4A5568" >
      <CardBody >
        <Image
          src={image}
          alt={title}
          height={300}
          width={300}
          borderRadius="lg"
          onClick={onOpen}
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
            Comprar
          </Button>
          <Button variant="ghost" colorScheme="blue" onClick={handleClick}>
            Agregar al carrito
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
    <ModalComponent size='xl' onClose={onClose} isOpen={isOpen} image={image} />
   </>
  );
};
