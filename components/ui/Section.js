import styles from "./Section.module.css";
import Image from "next/image";
import React from "react";

export default function Section({imageSrc, title, children}) {
    return (
        <div className={styles.section}>
            <div className={styles.imageContainer}>
                <Image src={imageSrc} width="250" height="250" layout={"responsive"}/>
            </div>
            <div className={styles.sectionContent}>
                <h1>{title}</h1>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}