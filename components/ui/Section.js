import styles from "./Section.module.css";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Img from "@/components/ui/Img";

export default function Section({imageSrc, title, children}) {
    const variants = {
        initial: {y: -100},
        animate: {y: 0}
    }
    return (
        <motion.div className={styles.section} variants={variants} initial={"initial"} animate={"animate"}>
            <div className={styles.sectionContent}>
                <h1>{title}</h1>
                <div>
                    {children}
                </div>
            </div>
            <Img className={styles.image} src={imageSrc} width="250" height="250" layout={"responsive"}/>
        </motion.div>
    )
}