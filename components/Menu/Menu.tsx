import { items } from "../../constants/menuItems";

export default function Menu() {
 
  return (
    <>
     <div className="flex h-4 bg-[#FEFAF6] mt-4">
        <span></span>
     </div>
      <div className="flex bg-[#FEFAF6] h-screen text-[#553605]">
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
