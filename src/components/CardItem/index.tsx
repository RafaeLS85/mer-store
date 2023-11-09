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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { disabled } from "@/utils";
import { useChart } from "@/hooks/useChart";

interface Props {
  item: Product;
}

export const CardItem = ({ item }: Props) => {
  const { category, description, id, image, price, stock, title } = item;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const chartState = useChartStore();
  const router = useRouter();
  const { chartItem, addToChart } = useChart({ store: chartState, id, item });
  const isDisabled = disabled(chartItem, stock);

  return (
    <>
      <Card maxW="sm" backgroundColor="#4A5568">
        <CardBody>
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
            <Text>{description}</Text>
            <Text>Disponibles: {stock}</Text>
            <Text color="blue.400" fontSize="2xl">
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => router.push(`/detail/${item.id}`)}
            >
              Ver mas
            </Button>
            <Button
              variant="solid"
              colorScheme="green"
              onClick={addToChart}
              isDisabled={isDisabled}
            >
              Agregar
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <ModalComponent
        size="xl"
        onClose={onClose}
        isOpen={isOpen}
        image={image}
      />
      <ToastContainer />
    </>
  );
};
