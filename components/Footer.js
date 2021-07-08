import Link from "next/link"
import styles from "./Footer.module.css"
import NavLink from "./NavLink";
import SocialBar from "@/components/SocialBar";

export default function Header() {
    return (
        <div className={styles.footer}>
            <div>Connect With Gary</div>
            <SocialBar/>
            <div>Gary Dacanay - {new Date().getFullYear()}</div>
        </div>
    )
}