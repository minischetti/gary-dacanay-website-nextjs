import {useRouter} from "next/router";
import Link from "next/link";
import {forwardRef} from "react";
import styles from "./NavLink.module.css";

export default ({href, children}) => {
    const router = useRouter()
    const currentPath = router.pathname;

    return (
        <Link href={href}>
            <a className={`${styles.link}${href === currentPath ? ` ${styles.active}` : ""}`}>
                {children}
            </a>
        </Link>
    )
}