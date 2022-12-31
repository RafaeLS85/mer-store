import Image from 'next/image'
import styles from '../../styles/Navbar.module.css'
interface Props {
    items: string[]
}

export default function NavbarItems({items}:Props){
    return (
        <div className={`grid grid-cols-2 gap-4 bg-white`}>
         <Image src="/tempHeaderLogo.png" alt="logo" width={100} height={100} priority  />
        <ul className='flex'>
            {items.map((item, i) => (
                <li key={i} className={styles.item}>
                    {item}
                </li>
            ))}
        </ul>
        </div>
    )
}