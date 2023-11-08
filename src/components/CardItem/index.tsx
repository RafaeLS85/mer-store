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
import { ModalComponent } from "../shared/Modal";
import { useChartStore } from "@/store/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { success } from "../shared/Notify";
import { BiSolidCartAdd } from "react-icons/bi";
import { MdAdd } from "react-icons/md"

interface Props {
  item: Product
}

export const CardItem = ({ item }: Props) => {
  const { category, description, id, image, price, stock, title } = item;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const chartState = useChartStore();
  const router = useRouter();
  // console.log('chartState:', chartState)

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
    success("Producto agregado al carrito");
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
          <Text color="blue.400" fontSize="2xl">
            ${ price }
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue" onClick={() => router.push(`/detail/${item.id}`)}>
            Ver mas
          </Button>
          <Button variant="solid" colorScheme="green" onClick={addToChart}>
            {/* <MdAdd size={20}/>  */}
            Agregar
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
    <ModalComponent size='xl' onClose={onClose} isOpen={isOpen} image={image} />
    <ToastContainer />
   </>
  );
};
