import Link from "next/link"
import Header from "@/components/Header";
import styles from "./HomePage.module.css"
import SocialBar from "@/components/SocialBar";

export default function HomePage({children}) {
    return (
        <div className={styles.page}>
            <Header/>
            <div className={styles.content}>
                {children}
            </div>
            <SocialBar/>
        </div>
    )
}