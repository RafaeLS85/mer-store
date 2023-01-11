import NavbarItems from "./NavbarItems";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

export default function Navbar() {
  const { show } = useContext(MenuContext);

  const navStyles = {
    main: {
      padding: "5px",
      color: "black",
      display: "flex",
      backgroundColor: "#FEFAF6",
    },
    sticky: {
      position: "fixed" as const,
      top: "0",
      width: "100%",
    },
  };

  const sticky = show ? navStyles.sticky : "";

  return (
    <nav style={Object.assign(navStyles.main, sticky)} id="navbar">
      <NavbarItems />
    </nav>
  );
}
