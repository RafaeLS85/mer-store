import { useRouter } from "next/router";
import useSelectedPath from "../../hooks/useSelectedPath";
import useToggleBtn from "../../hooks/useToggleBtn";

interface Props {
  title: string;
  url?: string;
}

export default function ShopBtn({ title, url = "" }: Props) {
  // const router = useRouter();
  const { setExpanded, setShow} = useToggleBtn(true)
  // const { selectedPath, setSelectedPath, getPathFromIndex } = useSelectedPath()

  const handleClick = () => {
    // agregar flag para saber si se desea redireccionar usando el router o creando una nueva pestaña
    // router.push(url)
    window.open (url, '_ blank'); 
  
    setExpanded(false)
    setShow(false)  
  }

  return (
    <button
      style={{
        backgroundColor: "#F1AB13",
        color: "white",
        padding: "1em 1.67em",
        borderRadius: "30px",
        fontSize: "calc((1 - 1) * 1.2vw + 1rem)",
        textTransform: 'uppercase',
        fontWeight: 'bold'
      }}
      onClick={handleClick}
    >
      { title }
    </button>
  );
}
