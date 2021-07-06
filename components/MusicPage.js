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
            {/*<div className={styles.links}>*/}
            {/*    <NavLink className={styles.link} href="/music/bio">*/}
            {/*        <div className={styles.capsule}>Bio</div>*/}
            {/*    </NavLink>*/}
            {/*    <NavLink className={styles.link} href="/music/lessons">*/}
            {/*        <div className={styles.capsule}>Lessons</div>*/}
            {/*    </NavLink>*/}
            {/*</div>*/}
            <div className={styles.content}>
                {children}
            </div>
            <SocialBar/>
        </div>
    )
}