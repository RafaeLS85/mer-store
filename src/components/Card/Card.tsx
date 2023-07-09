"use client";
import { useChartStore } from "@/store/store";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { BiSolidCartAdd } from "react-icons/bi";

interface Props {
  item: Product;
}

export default function Card({ item }: Props) {
  const { id, title, image, description, price, stock } = item;

  const { products, user, total} = useChartStore()

  const addToChart = () => {
    console.log("add to chart");
    // const newProduct: Product[] = products.push(item)
    console.log({item})
    console.log({products})
    useChartStore.setState({ products: [... products, item] });
  };

  const CardComponent = () => {
    return (
      <>
        <div
          style={{
            padding: "10px",
            pointerEvents: !stock ? "none" : "unset",
          }}
        >
          <Link href={`/product/${id}`}>
            <Image src={image} alt={title} width={150} height={150} priority />
          </Link>
        </div>
        <div style={{ padding: "1rem" }}>{description.toUpperCase()}</div>
        <StockComponent stock={stock} />
      </>
    );
  };

  const StockComponent = ({ stock }: { stock: number }) => {
    if (!stock)
      return <div style={{ padding: "1rem", color: "yellow" }}>Agotado</div>;
    return <div style={{ padding: "1rem" }}>Disponibles: {stock}</div>;
  };

  const AddBtn = () => {
    return (
      <button
        disabled={!Boolean(stock)}
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
        onClick={addToChart}
      >
        <BiSolidCartAdd
          size={40}
          width={100}
          height={100}
          style={{ background: "#6C9018" }}
        />
      </button>
    );
  };

  const Footer = () => {
    return (
      <div
        style={{
          background: "gray",
          padding: "10px",
        }}
      >
        <div>$ {price}</div>

        <AddBtn />
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#aa5a2c",
        color: "#FFF",
        opacity: stock ? "" : "0.7",
        maxHeight: "370px",
      }}
    >
      <CardComponent />
      <Footer />
    </div>
  );
}
