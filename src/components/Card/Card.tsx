"use client";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { BiSolidCartAdd } from "react-icons/bi";

interface Props {
  item: Product;
}

export default function Card({ item }: Props) {
  const { id, title, image, description, category, price } = item;

  const addToChart = () => {
    console.log("add to chart");
  };

  const CardComponent = () => {
    return (
      <>
        <Link href={`/product/${id}`}>
          <Image src={image} alt={title} width={150} height={150} priority />
        </Link>
        <div style={Object.assign({})}>{description}</div>
      </>
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
      }}
    >
      <button
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
        onClick={addToChart}
      >
        <BiSolidCartAdd size={40} style={{ background: "#6C9018" }} />
      </button>

      <CardComponent />
    </div>
  );
}
