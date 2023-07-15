// "use client";
// import Layout from "@/components/Layout/Layout";
// import useProducts from "@/hooks/useProducts";
// import { Product } from "@/types/types";
// import Image from "next/image";
// import { BiSolidCartAdd } from "react-icons/bi";
// import { useRouter } from "next/navigation";
// import { useChartStore } from "@/store/store";

// export default function Page({ params }: { params: { slug: string } }) {
//   const { products } = useProducts();
//   const router = useRouter();
//   const { products: data } = useChartStore()
//   const product = products.find((product) => product.id === params.slug);

//   const toCheckout = () => {
//     console.log("checkout");
//     router.push("/checkout");
//   };

//   const addToChart = () => {
//     console.log("add to chart");
//     if(product){
//       useChartStore.setState({ products: [...data, product] });
//     }
//   };

//   const DetailComponent = (product: Product) => {
//     return (
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "1rem",
//           alignSelf: "center",
//         }}>
//         <h1>{product.title}</h1>
//         <Image
//           width={150}
//           height={150}
//           src={product.image}
//           alt={product.title}
//         />
//         <p>{product.description}</p>
//         <p> $ {product.price}</p>

//         <button
//           style={{
//             display: "flex",
//             alignItems: "flex-end",
//             justifyContent: "flex-end",
//           }}
//           onClick={addToChart}
//         >
//           Agregar al carrito
//           <BiSolidCartAdd size={40} style={{ background: "#6C9018" }} />
//         </button>

//         <button style={{ background: "#6C9018", padding: '1rem', borderRadius: '10px' }} onClick={toCheckout}>
//           COMPRAR
//         </button>
//       </div>
//     );
//   };

//   return (
//     <Layout title="Product">
//       {product && <DetailComponent {...product} />}
//     </Layout>
//   );
// }
