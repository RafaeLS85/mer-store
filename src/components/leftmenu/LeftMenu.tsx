"use client";
import React, { useState } from "react";
import styles from "./leftmenu.module.css";
import { useCategoryStore, useSearchStore } from "../../store/store";
import { useRouter } from "next/navigation";

interface Props {
  asideCss: {
    aside: {};
  };
}

export const LeftMenu = ({ asideCss }: Props) => {
  const items = [
    { id: 0, name: "Todos los productos" },
    { id: 1, name: "Miel" },
    { id: 2, name: "Tejidos" },
  ];
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const [active, setActive] = useState(0);

  const updateItems = (i: number) => {
    setActive(i);
    useCategoryStore.setState({ categoryId: i });
    router.push("/");

  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      useSearchStore.setState({ searchTerm: inputValue });
    }
  };

  return (
    <aside style={Object.assign(asideCss.aside)} className={styles.aside}>
      <input
        type="search"
        placeholder="Buscar productos"
        onKeyDown={handleKeyDown}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <ul className={styles.ul}>
        {items.map((item, index) => (

          <li
            key={item.id}
            onClick={() => updateItems(index)}
            className={`${active === index ? styles.active : styles.inactive}`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};
