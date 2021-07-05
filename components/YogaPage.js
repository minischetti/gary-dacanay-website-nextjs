import Link from "next/link"
import Header from "@/components/Header";
import styles from "./YogaPage.module.css"
import SocialBar from "@/components/SocialBar";

export default function YogaPage({children}) {
    return (
        <div className={styles.page}>
            <Header/>
            {children}
            <SocialBar/>
        </div>
    )
}