import Link from "next/link"
import styles from "./Header.module.css"
import {useRouter} from "next/router";
import NavLink from "./NavLink";

export default function Header() {

    return (
        <div className={styles.header}>
            <Link href="/">
                <div className={styles.logo}>Gary <strong>Dacanay</strong></div>
            </Link>
            <div className={styles.links}>
                <NavLink href="/music/bio">Music</NavLink>
                <Link href="/yoga">Yoga</Link>
            </div>
        </div>
    )
}