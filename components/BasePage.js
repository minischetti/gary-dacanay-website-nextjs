import React from 'react';
import styles from "./BasePage.module.css"

export const THEME = {
    DARK: "DARK",
    LIGHT: "LIGHT"
}

export default function BasePage({children, theme = THEME.DARK}) {
    const className = theme === THEME.LIGHT ? "lightTheme" : "darkTheme";
    return (
        <div className={className + " " + styles.page}>
            {children}
        </div>
    )
}