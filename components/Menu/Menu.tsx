import { FaInstagramSquare } from "react-icons/fa";
import { items } from "../../constants/menuItems";
import { getElementHeight } from "../../utils/Utils";
import ShopBtn from "../ShopBtn/ShopBtn";

export default function Menu() {
  const styles = {
    container: {
      marginTop: `${getElementHeight("navbar")}px`,
    },
  };

  return (
    <>
      <div className="flex h-4 bg-[#FEFAF6]" style={styles.container}>
        <span></span>
      </div>
      <div className="flex justify-center bg-[#FEFAF6] h-screen text-[#553605] text-lg uppercase p-6 ">
        <ul>
          {items.map((item) => (
            <li key={item.id} className="p-4 text-center">
              {item.name}
            </li>
          ))}
          <li className="p-4">
            <FaInstagramSquare size={30} className="mx-auto"/>
          </li>
          <li className="p-4 text-center">
            <ShopBtn />
          </li>
        </ul>
      </div>
    </>
  );
}
