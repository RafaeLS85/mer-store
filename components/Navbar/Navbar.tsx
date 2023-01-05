import NavbarItems from "./NavbarItems";
import styles from '../../styles/Navbar.module.css'

export interface MenuItems {
  name: string;
  id: number;
  url: string;
}

export default function Navbar() {
  const items: MenuItems[] = [
    { name: "Home", id: 1, url: "/" },
    { name: "About", id: 2, url: "/about" },
    { name: "Products", id: 3, url: "/products" },
    { name: "Recipes", id: 4, url: "/recipes" },
    { name: "Contact", id: 5, url: "/contact" },
  ];

  return (
    <nav className={styles.main}>
      <NavbarItems items={items} />
    </nav>
  );
}
