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
      <div className="flex bg-[#FEFAF6] h-screen text-[#553605] text-lg uppercase p-6">
        <ul>
          {items.map((item) => (
            <li key={item.id} className="p-4">
              {item.name}
            </li>
          ))}
          <li>
            <FaInstagramSquare size={30} />
          </li>
          <li>
            <ShopBtn />
          </li>
        </ul>
      </div>
    </>
  );
}
