import styles from "./Link.module.css";
import {IoArrowForward} from "react-icons/io5";
import Link from "next/link";

export function IconLink({href, children}) {
    return (
        <Link href={href} target={"_blank"} rel={"noreferrer"} className={styles.link} passHref>
            <div>
                {children}
            </div>
            <div className={styles.icon}>
                <IoArrowForward/>
            </div>
        </Link>
    )
}