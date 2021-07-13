import Link from "next/link"
import React from 'react';
import styles from "./BasePage.module.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const THEME = {
    DARK: "DARK",
    LIGHT: "LIGHT"
}

export default function BasePage({children, theme = THEME.DARK}) {
    const className = theme === THEME.LIGHT ? "lightTheme" : "darkTheme";
    return (
        <div className={className + " " + styles.page}>
            <div className={styles.content}>
                <Header/>
                {children}
                <Footer/>
            </div>
        </div>
    )
}