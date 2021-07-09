import Link from "next/link"
import styles from "./MusicPage.module.css"
import Header from "@/components/Header";
import SocialBar from "@/components/SocialBar";
import {useRouter} from "next/router";
import NavLink from "@/components/NavLink";

export default function MusicPage({children}) {

    return (
        <div className={styles.page}>
            <Header/>
            <div className={styles.links}>
                <NavLink className={styles.link} href="/music/bio">Bio</NavLink>
                <NavLink className={styles.link} href="/music/lessons">Lessons</NavLink>
            </div>
            {children}
            <SocialBar/>
        </div>
    )
}