import Image from "next/image";
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import {RiInstagramFill} from "react-icons/ri"
import ShopBtn from "./ShopBtn";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useRouter } from "next/router";
import { items } from "../../constants/menuItems";
import { mediaQueryMobile, mediaQueryNav } from "../../constants/config";
import useSelectedPath from "../../hooks/useSelectedPath";
export interface MenuItems {
  name: string;
  id: number;
  url: string;
}

export default function NavbarItems() {
  const matches = useMediaQuery(mediaQueryNav);
  const isMobile = useMediaQuery(mediaQueryMobile);
  const router = useRouter();
  const { selectedPath, setSelectedPath, getPathFromIndex} = useSelectedPath()
  
  const handleClick = (item: MenuItems, index: number) => {
    const path = getPathFromIndex(index)
    setSelectedPath(path);
    router.push(item.url);
  };

  const navbarItemsCss = {
    main: {
      padding: "2vw",
      color: "black",
      display: "flex",
      backgroundColor: "#FEFAF6",
    },
    hide: {
      display: !matches ? "flex" : "none",
    },

    show_btn: {
      display: matches ? "flex" : "none",
      alignItems: "center",
    },
  };

  return (
    <div className="grid gap-4 bg['#FEFAF6'] w-full">
      <div className="flex justify-between">
        <div className={` ${isMobile  ? '' : 'ml-4'}`}>
          <Image src="/logo-example.png" alt="logo" width={100} height={100} priority  />
        </div>

        <div className="flex mr-4">
          <ul className={`flex`} style={navbarItemsCss.hide}>
            {items.map((item, index) => (
              <li
                key={item.id}
                className="item"
                style={{
                   borderBottom: getPathFromIndex(index) === selectedPath ? '2px solid #553605' : 'none' 
                }}
                onClick={() => handleClick(item, index)}
              >
                {item.name}
              </li>
            ))}
            <li className="item">
              <RiInstagramFill size={30} />
            </li>
            <li className="item">
              <ShopBtn title="COMPRAR"/>
            </li>
          </ul>
          <div style={navbarItemsCss.show_btn}>
            <ToggleBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
