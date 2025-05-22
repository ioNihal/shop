import Link from "next/link"
import styles from "../styles/Header.module.css"

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Next.js Store</h1>
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