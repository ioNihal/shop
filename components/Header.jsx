import Link from "next/link"
import styles from "../styles/Header.module.css"

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>Title</div>
            <nav className={styles.navbar}>
                <ul>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                    <li><Link href={"/products"}>Products</Link></li>
                </ul>
            </nav>
        </header>
    )
}