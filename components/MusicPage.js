import Link from "next/link"
import styles from "./MusicPage.module.css"
import Header from "@/components/Header";
import SocialBar from "@/components/SocialBar";

export default function MusicPage({children}) {
    return (
        <div className={styles.page}>
            <Header/>
            <Link href="/music/bio">Bio</Link>
            <Link href="/music/lessons">Lessons</Link>
            {children}
            <SocialBar/>
        </div>
    )
}