import styles from '../../styles/Navbar.module.css'
interface Props {
    items: string[]
}

export default function NavbarItems({items}:Props){
    return (
        <ul className={styles.main}>
            {items.map((item, i) => (
                <li key={i} className={styles.item}>
                    {item}
                </li>
            ))}
        </ul>
    )
}