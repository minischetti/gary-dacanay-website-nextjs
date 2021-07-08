import Link from "next/link"
import React from 'react';
import styles from "./BasePage.module.css"
import Header from "@/components/Header";
import SocialBar from "@/components/SocialBar";
import {useRouter} from "next/router";
import NavLink from "@/components/NavLink";
import Footer from "@/components/Footer";

export const THEME = {
    DARK: "DARK",
    LIGHT: "LIGHT"
}

export default function BasePage({children, theme = THEME.DARK}) {
    const className = theme === THEME.LIGHT ? styles.lightPage : styles.darkPage;
    return (
        <div className={className}>
            <div className={styles.content}>
                <Header/>
                {children}
                <Footer/>
            </div>
        </div>
    )
}