"use client";
import React, { useState } from "react";
import styles from "./leftmenu.module.css";
interface Props {
  asideCss: {
    aside: {};
  };
}

export const LeftMenu = ({ asideCss }: Props) => {
  const items = [
    { id: 1, name: "Todos los productos" },
    { id: 2, name: "Miel" },
    { id: 3, name: "Tejidos" },
  ];

  const [active, setActive] = useState(1);

  const updateItems = (i: number) => {
    setActive(i + 1);
  };

  return (
    <aside style={Object.assign(asideCss.aside)}>
      <input type="search" placeholder="Search" />
      <ul className={styles.ul}>
        {items.map((item, index) => (
          <li
            key={item.id}
            onClick={() => updateItems(index)}
            className={`${
              active === index + 1 ? styles.active : styles.inactive
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};
