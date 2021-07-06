import styles from "./SocialBar.module.css"
import Image from "next/image";

export default function SocialBar() {
    return (
        <div className={styles.container}>
            <a href="mailto:gjdacanay@gmail.com" target="_top">
                <img className={styles.icon} width={24} src={"/icons/mail-outline.svg"}></img>
            </a>
            <a href="https://www.facebook.com/garydacanay" target="_blank">
                <img width={24} src={"/icons/logo-facebook.svg"}></img>
            </a>
            <a href="https://www.instagram.com/gary_dacanay" target="_blank">
                <img width={24} src={"/icons/logo-instagram.svg"}></img>
            </a>
            <a href="https://www.youtube.com/user/GaryDacanay" target="_blank">
                <img width={24} src={"/icons/logo-youtube.svg"}></img>
            </a>
        </div>
    )
}