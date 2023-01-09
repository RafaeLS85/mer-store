import Image from "next/image";
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import { MenuItems } from "./Navbar";
import { FaInstagramSquare } from "react-icons/fa";
import ShopBtn from "../ShopBtn/ShopBtn";
import useMediaQuery from "../../hooks/useMediaQuery";

interface Props {
  items: MenuItems[];
}

export default function NavbarItems({ items }: Props) {

  const matches = useMediaQuery('(max-width: 800px)')

  // console.log({matches})

  const itemsStyles = {
    main: {
      padding: '2vw',
      color: 'black',
      display: 'flex',
      backgroundColor: '#FEFAF6'
    },
    item: {
      fontFamily: 'Europa',
      color: '#553605',
      textTransform: 'uppercase' as const,
      fontSize: '17px',
      margin: '5px',
      alignSelf: 'center'
    },
    hide: {
      display: !matches ? 'flex' : 'none',
    },

    show_btn: {
      display: matches ? "flex" : 'none',
      alignItems: 'center'
    },
  };

//   .item:hover{
//     text-decoration: underline;
// }

  const handleClick = () => {
    console.log("click");
  };

  // style={{ display: this.state.showStore ? "block" : "none" }}

  return (
    <>
    <div className={`grid gap-4 bg['#FEFAF6'] w-full `}>
      <div className="flex justify-between">
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
            priority
          />
        </div>

        <div className="flex">
          <ul className={`flex`} style={itemsStyles.hide} >
            {items.map((item) => (
              <li key={item.id} style={itemsStyles.item} >
                {item.name}
              </li>
            ))}
            <li style={itemsStyles.item} >
              <FaInstagramSquare size={30} />
            </li>
            <li style={itemsStyles.item} >
              <ShopBtn />
            </li>
          </ul>
          <div style={itemsStyles.show_btn} >
            <ToggleBtn handleClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
