import styles from "./Section.module.css";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Img from "@/components/ui/Img";
import {useInView} from "react-intersection-observer";

export default function Section({imageSrc, title, children}) {
    const { ref, inView, entry } = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    const variants = {
        initial: {scaleY: 0},
        animate: {scaleY: 1}
    }
    return (
        <motion.div ref={ref} className={styles.section} variants={variants} initial={"initial"} animate={inView ? "animate" : ""}>
            <div className={styles.sectionContent}>
                <h1>{title}</h1>
                <div>
                    {children}
                </div>
            </div>
            {/*<Img className={styles.image} src={imageSrc} width="250" height="250" layout={"responsive"}/>*/}
        </motion.div>
    )
}