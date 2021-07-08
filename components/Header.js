import Link from "next/link"
import styles from "./Header.module.css"
import {useRouter} from "next/router";
import NavLink from "./NavLink";
import Logo from "@/components/ui/Logo";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <Logo/>
                <div className={styles.links}>
                    <NavLink href="/music">Music</NavLink>
                    <NavLink href="/yoga">Yoga</NavLink>
                </div>
            </div>
        </div>
    )
}