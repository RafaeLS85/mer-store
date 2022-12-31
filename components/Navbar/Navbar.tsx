import NavbarItems from "./NavbarItems";
import styles from '../../styles/Navbar.module.css'
import Image from "next/image";

export default function Navbar(){
    const items = ['Home', 'About', 'Products', 'Recipes', 'Contact']

    return (
        <nav className=''>
            <div>
                <Image src="/assets/tempHeaderLogo.png" alt="logo" width={60} height={60} priority  />
            </div>
           <NavbarItems items={items}/>
        </nav>
    )
}