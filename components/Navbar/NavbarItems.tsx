import { items } from '../../constants/menuItems'
export interface MenuItems {
  name: string;
  id: number;
  url: string;
}

export default function NavbarItems() {

  const navbarItemsCss = {
    main: {
      padding: "2vw",
      color: "black",
      display: "flex",
      backgroundColor: "#FEFAF6",
    },
    hide: {
      display:"flex" ,
    },

    show_btn: {
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <div className="grid gap-4 bg['#FEFAF6'] w-full">
      <div className="flex justify-between">
        
        <div className="flex mr-4">
          <ul className={`flex`} style={navbarItemsCss.hide}>
            {items.map((item, index) => (
              <li
                key={item.id}
                className="item"
                style={{
                   borderBottom:'2px solid #553605'
                }}
                onClick={() => console.log(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>      
        </div>
      </div>
    </div>
  );
}
