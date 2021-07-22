import styles from "./Venmo.module.css";
import {IoLogoVenmo} from "react-icons/io5/index";
import React from "react";

export default function Venmo({tag}) {
    return (
        <div className={styles.container}>
            <IoLogoVenmo size={36}/>
            <div className={styles.tag}>@{tag}</div>
        </div>
    )
}