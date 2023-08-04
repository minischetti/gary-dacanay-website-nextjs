import styles from "./Img.module.css"
import Image from "next/image";
import React from "react";

export default function Img(props) {
    return (
        <div className={styles.container}>
            <Image {...props} placeholder={"blur"} alt="An image"/>
        </div>
    )
}