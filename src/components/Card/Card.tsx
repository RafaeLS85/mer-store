"use client";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: Product;
}

export default function Card({ item }: Props) {
  const { id, title, image, description, category, price } = item;

  const CardComponent = () => {
    return (
      <>
        <Image src={image} alt={title} width={150} height={150} priority />
        <div style={Object.assign({})}>{description}</div>
      </>
    );
  };

  return (
    <Link href={`/product/${id}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#aa5a2c",
          color: "#FFF",
        }}
      >
        <CardComponent />
      </div>
    </Link>
  );
}
