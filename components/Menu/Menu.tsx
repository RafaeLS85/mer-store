import {RiInstagramFill} from "react-icons/ri"
import { items } from "../../constants/menuItems";
import { getElementHeight } from "../../utils/Utils";
import ShopBtn from "../Navbar/ShopBtn";
import { useRouter } from "next/router";
import useSelectedPath from "../../hooks/useSelectedPath";
import { MenuItems } from "../Navbar/NavbarItems";
import useToggleBtn from "../../hooks/useToggleBtn";

export default function Menu() {

  const router = useRouter();
  const { setSelectedPath, getPathFromIndex} = useSelectedPath()

 const { setExpanded, setShow} = useToggleBtn(true)

  const styles = {
    container: {
      marginTop: `${getElementHeight("navbar")}px`,
    },
  };

  const handleClick = (item: MenuItems, index: number) => {
    const path = getPathFromIndex(index)
    setSelectedPath(path);
    router.push(item.url);    
    setExpanded(false)
    setShow(false)    
  };

  return (
    <>
      <div className="flex h-4 bg-[#FEFAF6]" style={styles.container}>
        <span></span>
      </div>
      <div className="flex justify-center bg-[#FEFAF6] h-screen text-[#553605] text-lg uppercase p-6 ">
        <ul>
          {items.map((item, index) => (
            <li key={item.id} className="p-4 text-center"  onClick={() => handleClick(item, index)}>
              {item.name}
            </li>
          ))}
          <li className="p-4">
            <RiInstagramFill size={30} className="mx-auto"/>
          </li>
          <li className="p-4 text-center">
            <ShopBtn title="COMPRAR" url="/shop" />
          </li>
        </ul>
      </div>
    </>
  );
}
