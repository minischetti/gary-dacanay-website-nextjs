import styles from "@/components/SocialIcon.module.css";
import {useEffect} from "react";

export default function SocialIcon({url, icon}) {
    return (
        <a href={url} rel="noreferrer" target="_blank" className={styles.icon}>
            {icon}
        </a>
    )
}
