import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import { MenuItems } from "./Navbar";

interface Props {
  items: MenuItems[];
}

export default function NavbarItems({ items }: Props) {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div
      className={`grid gap-4 bg['#FEFAF6'] w-full `}
    >
      <div className="flex justify-between">
        <div>
          <Image
            src="/tempHeaderLogo.png"
            alt="logo"
            width={100}
            height={100}
            priority
          />
        </div>

        <div>
          <ul className={`flex ${styles["hide-menu"]}`}>
            {items.map((item) => (
              <li key={item.id} className={styles.item}>
                {item.name}
              </li>
            ))}
          </ul>
          <div className={` ${styles["show-button"]}`}>
            <ToggleBtn handleClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
