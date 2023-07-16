"use client";
import { Product } from "../../types/types";
import styles from "./chart.module.css";
import { IoMdAddCircle } from "react-icons/io";
import { BiSolidMinusCircle } from "react-icons/bi";
import { useChartStore } from "../../store/store";
// import { ToastContainer, toast } from "react-toastify";

export const CheckoutTable = ({ products }: { products: Product[] }) => {
  const { products: data } = useChartStore();

  // const cuantity = (id: string) => {
  //   return products.filter((p) => p.id === id).length;
  // };

  // const notify = () =>
  //   toast("Toast is good", {
  //     hideProgressBar: true,
  //     autoClose: 2000,
  //     type: "success",
  //     position: "bottom-right",
  //   });

  if (!products.length) return <div>No items</div>;

  const handleRemove = (index: number) => {
    if (index > -1) products.splice(index, 1);

    useChartStore.setState({ products });

    // notify();
  };
  const handleAdd = (item: Product) => {
    useChartStore.setState({ products: products.concat(item) });
  };

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
        {/* <th style={{ padding: "1rem", margin: "2rem" }}>Cantidad</th> */}
        <th style={{ padding: "1rem", margin: "2rem" }}>Agregar/Borrar</th>
      </tr>
      {data.map((product, index) => (
        <tr key={product.id + Math.random()}>
          <td
            key={product.id + Math.random()}
            style={{ width: "100vw", padding: "1rem", margin: "2rem" }}
          >
            {product.description}
          </td>
          <td
            key={product.id + Math.random()}
            style={{ width: "2rem", padding: "1rem", margin: "2rem" }}
          >
            ${product.price}
          </td>
          <td
            key={product.id + Math.random()}
            style={{ width: "2rem", padding: "1rem", margin: "2rem" }}
          >
            <button
              style={{ background: "none", marginRight: "1rem" }}
              onClick={() => handleAdd(product)}
            >
              <IoMdAddCircle style={{ background: "#6C9018" }} size={20} />
            </button>

            <button
              style={{ background: "none" }}
              onClick={() => handleRemove(index)}
            >
              <BiSolidMinusCircle style={{ background: "#b11f1f" }} size={20} />
            </button>       
          </td>
        </tr>
      ))}
      {/* <ToastContainer /> */}
    </table>
  );
};
