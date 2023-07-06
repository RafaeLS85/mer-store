import { Product } from "@/types/types";
import Image from "next/image";


interface Props {
    item: Product
}


export default function Card({item}: Props) {
  const { id, title, image, description,category, price  } = item;

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#aa5a2c",
        color: "#FFF",

    }} onClick={() => console.log('click')}>
      <Image src={image} alt={title} width={150} height={150} priority />
      <div style={Object.assign({})}>{description}</div>
    </div>
  );
}
