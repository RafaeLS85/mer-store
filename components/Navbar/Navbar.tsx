import NavbarItems from "./NavbarItems";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { items } from "../../constants/menuItems";

export interface MenuItems {
  name: string;
  id: number;
  url: string;
}

export default function Navbar() {
  const { show } = useContext(MenuContext);
 

  const navStyles = {
    main: {
      padding: '2vw',
      color: 'black',
      display: 'flex',
      backgroundColor: '#FEFAF6'
    },
    sticky: {
      position: 'fixed' as const,
      top: '0',
      width: '100%'
    }
  };

  // show ? navStyles.sticky : ''

  const sticky = show ? navStyles.sticky : ''

  return (
    <nav style={Object.assign(navStyles.main, sticky)} >
      <NavbarItems items={items} />
    </nav>
  );
}
