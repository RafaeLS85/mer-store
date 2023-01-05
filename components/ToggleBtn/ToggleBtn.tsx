import { useState, useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

interface ToggleBtnProps {
  handleClick: () => void;
}

export default function ToggleBtn({ handleClick }: ToggleBtnProps) {
  const { show, setShow } = useContext(MenuContext);
  const [expanded, setExpanded] = useState(false);

  const triggerMenu = () => {
    setExpanded(!expanded);
    setShow(!show);
  };

  return <BurgerBtn clicked={triggerMenu} expanded={expanded} />;
}

interface BurgerBtnProps {
  clicked: () => void;
  expanded: boolean;
}

const BurgerBtn = ({ clicked, expanded }: BurgerBtnProps) => {
  let styles = ["burger"];
  if (expanded) {
    styles.push("expanded");
  }

  return (
    <button className={styles.join(" ")} onClick={clicked}>
      <span className="bar-1"></span>
      <span className="bar-2"></span>
      <span className="bar-3"></span>
    </button>
  );
};
