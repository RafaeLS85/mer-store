import React from "react";

interface Props {
  asideCss: {
    aside: {};
  };
}

export const LeftMenu = ({ asideCss }: Props) => {
  const styles = {
    ul: {
      listStyle: "none",
      color: "black",
    },
  };

  return (
    <aside style={Object.assign(asideCss.aside)}>
      <input type="search" placeholder="Search" />
      <ul style={Object.assign(styles.ul)}>
        <li>Todos los productos</li>
        <li>Miel</li>
        <li>Tejidos</li>
      </ul>
    </aside>
  );
};
