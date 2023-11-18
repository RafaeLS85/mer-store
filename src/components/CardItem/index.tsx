"use client";
import { Product } from "@/types/types";
import {
  Box,
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
// import { useChartStore } from "@/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { capitalize, cutString, disabled } from "@/utils";
import { useChart } from "@/hooks/useChart";
import { CARD } from "@/constants/card";
import { fallback250 } from "@/constants/images";
import { useChartStore } from "@/store/chart";

interface Props {
  item: Product;
}

export const CardItem = ({ item }: Props) => {
  const {
    category,
    description,
    id,
    images_list,
    price,
    stock,
    title,
    thumbnail,
  } = item;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const chartState = useChartStore();
  const router = useRouter();
  const { chartItem, addToChart } = useChart({ store: chartState, id, item });
  const isDisabled = disabled(chartItem, stock);

  return (
    <>
      <Card maxW="sm" backgroundColor="#4A5568">
        <Text
          color="yellow.400"
          fontSize="2xl"
          as="b"
          padding="2"
          textAlign="center"
          noOfLines={1}
        >
          {cutString(capitalize(title), 30)}
        </Text>

        <CardBody alignSelf="center">
          <Image
            src={thumbnail}
            alt={title}
            borderRadius="lg"
            onClick={onOpen}
            fallbackSrc={fallback250}
          />

          <Stack mt="6" spacing="3" textAlign="center">
            <Stack noOfLines={3}>
              <Text>{cutString(description, 30)}</Text>
            </Stack>

            {stock ? (
              <Text color="green.400">
                {CARD.stock} {stock}
              </Text>
            ) : (
              <Text color="red.400">{CARD.outOfStock}</Text>
            )}
            <Text color="blue.400" fontSize="2xl">
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter alignSelf="center">
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => router.push(`/detail/${item.id}`)}
            >
              {CARD.goToDetail}
            </Button>
            <Button
              variant="solid"
              colorScheme="green"
              onClick={addToChart}
              isDisabled={isDisabled}
            >
              {CARD.add}
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <ModalComponent
        size="xl"
        onClose={onClose}
        isOpen={isOpen}
        images={images_list}
      />
      <ToastContainer />
    </>
  );
};
