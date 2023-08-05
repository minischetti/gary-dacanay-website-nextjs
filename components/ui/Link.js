import styles from "./Link.module.css";
import {IoArrowForward} from "react-icons/io5";
import Link from "next/link";

export function IconLink({href, children}) {
    return (
        <Link href={href} target={"_blank"} rel={"noreferrer"} className="flex gap-2 py-4 items-center text-sm font-medium" passHref>
            <div>
                {children}
            </div>
            <div className={styles.icon}>
                <IoArrowForward/>
            </div>
        </Link>
    )
}