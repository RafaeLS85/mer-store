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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  item: Product
}

export const CardItem = ({ item }: Props) => {
  const { category, description, id, image, price, stock, title } = item;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const chartState = useChartStore();

  // console.log('chartState:', chartState)

  const notify = () => {
    toast('item added to your cart', {
        position: "bottom-center",
        autoClose: 3000,
        type: "default", // "info", "success", "warning", "error"
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark", // "ligth", "colored"
    });
  }

  const addToChart = () => {
    const found = chartState.chart.find((p) => p.id === id);
    if (found) {
      chartState.increaseQuantity(id)
    } else {     
      chartState.addToChart({
        ...item,
         quantity: 1
       });
    }
    notify();
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
          <Text>
            Disponibles: { stock }
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
            Ver mas
          </Button>
          <Button variant="ghost" colorScheme="blue" onClick={addToChart}>
            Agregar al carrito
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
    <ModalComponent size='xl' onClose={onClose} isOpen={isOpen} image={image} />
    <ToastContainer />
   </>
  );
};
