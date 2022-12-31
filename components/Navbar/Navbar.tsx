import NavbarItems from "./NavbarItems";
import styles from '../../styles/Navbar.module.css'

export default function Navbar(){
    const items = ['Home', 'About', 'Products', 'Recipes', 'Contact']

    return (
        <nav className=''>            
           <NavbarItems items={items}/>
        </nav>
    )
}