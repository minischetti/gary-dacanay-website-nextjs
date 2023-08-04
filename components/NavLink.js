import {useRouter} from "next/router";
import Link from "next/link";
import {forwardRef} from "react";
import styles from "./NavLink.module.css";

export default function NavLink({href, children}) {
    const router = useRouter()
    const currentPath = router.pathname;

    return (
        <Link href={href} className={`${styles.link}${href === currentPath ? ` ${styles.active}` : ""}`}>
            {children}
        </Link>
    )
}