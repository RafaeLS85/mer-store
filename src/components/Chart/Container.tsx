import { Product } from "@/types/types";
import styles from "./chart.module.css";
import { IoMdAddCircle } from "react-icons/io";
import { BiSolidMinusCircle } from "react-icons/bi";

export const ChartContainer = ({ products }: { products: Product[] }) => {
  if (!products.length) return <div>No items</div>;

  const cuantity = (id: string) => {
    return products.filter((p) => p.id === id).length;
  };

  const uniques = products.filter((valor, indice) => {
    return products.indexOf(valor) === indice;
  });

  console.log({ uniques });

  return (
    <table
      className={styles.table}
      style={{
        border: "1px solid white",
        padding: "10px",
        margin: "10px",
      }}
    >
      <tr>
        <th style={{ padding: "1rem", margin: "2rem" }}>Item</th>
        <th style={{ padding: "1rem", margin: "2rem" }}>Precio</th>
        <th style={{ padding: "1rem", margin: "2rem" }}>Cantidad</th>
        <th style={{ padding: "1rem", margin: "2rem" }}>Agregar/Borrar</th>
      </tr>
      {uniques.map((product) => (
        <tr key={product.id}>
          <td
            key={product.id}
            style={{ width: "100vw", padding: "1rem", margin: "2rem" }}
          >
            {product.description}
          </td>
          <td
            key={product.id}
            style={{ width: "2rem", padding: "1rem", margin: "2rem" }}
          >
            {product.price}
          </td>
          <td
            key={product.id}
            style={{ width: "2rem", padding: "1rem", margin: "2rem" }}
          >
            {cuantity(product.id)}
          </td>
          <td
            key={product.id}
            style={{ width: "2rem", padding: "1rem", margin: "2rem" }}
          >
            {/* <button style={{ background: "none", marginRight: '1rem'}}>
              <IoMdAddCircle style={{background: '#6C9018'}} size={20} />
            </button>

            <button style={{ background: "none" }}>
              <BiSolidMinusCircle  style={{background: '#b11f1f'}} size={20}/>
            </button> */}

            <button style={{background: '#6C9018', width: '1.5rem', marginRight: '1rem' , borderRadius: '50%' }}>+</button>
            <button style={{ background: '#b11f1f', width: '1.5rem', borderRadius: '50%' }}>-</button>
          </td>
        </tr>
      ))}
    </table>
  );
};
