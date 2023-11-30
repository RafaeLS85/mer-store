"use client";
import { Chart } from "../../types/types";
// import { useChartStore } from "../../store/store";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Container,
} from "@chakra-ui/react";
import { TriangleUpIcon, TriangleDownIcon, DeleteIcon } from "@chakra-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CHECKOUT_PAGE } from "@/constants/checkout";
import Link from "next/link";
import { deleted } from "../shared/Notify";
import { useChartStore } from "@/store/chart";

export const CheckoutTable = ({ chart }: { chart: Chart[] }) => {
  const chartState = useChartStore();

  if (!chart.length)
    return (
      <Container textAlign="center">
        {CHECKOUT_PAGE.noItems}{" "}        
      </Container>
    );

  const handleRemove = (id: string) => {
    chartState.removeProduct(id);
    deleted();
  };

  const handleDecrease = (item: Chart) => {
    if (item.quantity >= 1) {
      chartState.decreaseQuantity(item.id);
    }
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>{CHECKOUT_PAGE.tableCaption}</TableCaption>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>{CHECKOUT_PAGE.quantity}</Th>
            <Th>{CHECKOUT_PAGE.item}</Th>
            <Th isNumeric>{CHECKOUT_PAGE.price}</Th>
            <Th isNumeric>{CHECKOUT_PAGE.stock}</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {chartState.chart.map((item, i) => (
            <Tr key={item.id + i}>
              <Td style={{ display: "flex", gap: "5px" }}>
                <button
                  onClick={() => chartState.increaseQuantity(item.id)}
                  style={{
                    opacity: item.quantity < item.stock ? "1" : "0.5",
                    pointerEvents:
                      item.quantity !== item.stock ? "unset" : "none",
                  }}
                >
                  <TriangleUpIcon color="green.500" />
                </button>
                <button
                  onClick={() => handleDecrease(item)}
                  style={{
                    opacity: item.quantity !== 1 ? "1" : "0.5",
                    pointerEvents: item.quantity !== 1 ? "unset" : "none",
                  }}
                >
                  <TriangleDownIcon color="red.500" />
                </button>
              </Td>
              <Td>{item.quantity}</Td>
              <Td>{item.title}</Td>
              <Td>${item.price}</Td>
              <Td>{item.stock}</Td>
              <Td>
                <button onClick={() => handleRemove(item.id)}>
                  <DeleteIcon />
                </button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <ToastContainer />
    </TableContainer>
  );
};
