"use client";
import { Chart, Product } from "../../types/types";
import { useChartStore } from "../../store/store";
// import { ToastContainer, toast } from "react-toastify";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { TriangleUpIcon, TriangleDownIcon, DeleteIcon } from '@chakra-ui/icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const CheckoutTable = ({ chart }: { chart: Chart[] }) => {
  const chartState = useChartStore();

  const notify = () => {
    toast("Item removed", {
      type: "default",
      theme: "dark",
      hideProgressBar: true,
      position: "bottom-center",
    });
  }

  if (!chart.length) return <div>No items</div>;

  const handleRemove = (id: string) => {
    chartState.removeProduct(id);
    notify();
  };

  const handleDecrease = (item: Chart) => {    
    if(item.quantity >= 1){
      chartState.decreaseQuantity(item.id)
    }
  }

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Los precios son solo disponibles para Argentina</TableCaption>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Cantidad</Th>
            <Th>Item</Th>
            <Th isNumeric>Precio</Th>
            <Th isNumeric>Disponibles</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            chartState.chart.map((item, i) => (
              <Tr key={ item.id + i }>
                 <Td style={{ display: 'flex', gap: '5px' }}>
                  <button onClick={()=> chartState.increaseQuantity(item.id)} style={{
                     opacity: item.quantity < item.stock ? '1' : '0.5',
                     pointerEvents: item.quantity !== item.stock ? 'unset' : 'none'
                  }} ><TriangleUpIcon color="green.500" /></button>
                  <button onClick={() => handleDecrease(item)} style={{
                    opacity: item.quantity !== 1 ? '1' : '0.5',
                    pointerEvents: item.quantity !== 1 ? 'unset' : 'none'
                  }}><TriangleDownIcon color="red.500" /></button>
                </Td>
                <Td>{item.quantity}</Td>
                <Td>{item.title}</Td>
                <Td>${item.price}</Td>
                <Td>{item.stock}</Td>
                <Td>
                  <button onClick={() =>handleRemove(item.id)}><DeleteIcon /></button>
                </Td>
              </Tr>
            ))
          }
        </Tbody>
      </Table>
      <ToastContainer />
    </TableContainer>
  );
};
