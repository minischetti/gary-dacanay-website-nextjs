import styles from "./SocialBar.module.css"
import Image from "next/image";
import {IoMail, IoLogoFacebook, IoLogoInstagram, IoLogoYoutube} from "react-icons/io5";

export default function SocialBar() {
    return (
        <div className={styles.container}>
            <a href="mailto:gjdacanay@gmail.com" rel="noreferrer" target="_top">
                <IoMail size={24} />
            </a>
            <a href="https://www.facebook.com/garydacanay" rel="noreferrer" target="_blank">
                <IoLogoFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/gary_dacanay" rel="noreferrer" target="_blank">
                <IoLogoInstagram size={24} />
            </a>
            <a href="https://www.youtube.com/user/GaryDacanay" rel="noreferrer" target="_blank">
                <IoLogoYoutube size={24} />
            </a>
        </div>
    )
}