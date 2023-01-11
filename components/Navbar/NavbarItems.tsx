import Image from "next/image";
import { useState } from "react";
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import { FaInstagramSquare } from "react-icons/fa";
import ShopBtn from "../ShopBtn/ShopBtn";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useRouter } from "next/router";
import { items } from "../../constants/menuItems";
export interface MenuItems {
  name: string;
  id: number;
  url: string;
}

export default function NavbarItems() {
  const matches = useMediaQuery("(max-width: 800px)");
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (item: MenuItems, index: number) => {
    setSelectedIndex(index);
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
        <div>
          <Image src="/logo.png" alt="logo" width={150} height={150} priority />
        </div>

        <div className="flex mr-4">
          <ul className={`flex`} style={navbarItemsCss.hide}>
            {items.map((item, index) => (
              <li
                key={item.id}
                className="item"
                style={{
                  textDecoration:
                    index === selectedIndex ? "underline" : "none",
                }}
                onClick={() => handleClick(item, index)}
              >
                {item.name}
              </li>
            ))}
            <li className="item">
              <FaInstagramSquare size={30} />
            </li>
            <li className="item">
              <ShopBtn />
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
