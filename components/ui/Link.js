import styles from "./Link.module.css";
import {IoArrowForward} from "react-icons/io5";

export function Link({href, children}) {
    return (
        <a href={href} target={"_blank"} rel={"noreferrer"} className={styles.link}>
            <div>
                {children}
            </div>
            <div className={styles.icon}>
                <IoArrowForward/>
            </div>
        </a>
    )
}