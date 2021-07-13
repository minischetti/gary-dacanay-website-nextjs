import styles from "./Section.module.css";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Section({imageSrc, title, children}) {
    const variants = {
        initial: {y: -100},
        animate: {y: 0}
    }
    return (
        <motion.div className={styles.section} variants={variants} initial={"initial"} animate={"animate"}>
            <div className={styles.imageContainer}>
                <Image src={imageSrc} width="250" height="250" layout={"responsive"}/>
            </div>
            <div className={styles.sectionContent}>
                <h1>{title}</h1>
                <div>
                    {children}
                </div>
            </div>
        </motion.div>
    )
}