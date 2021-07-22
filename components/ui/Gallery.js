import styles from "./Gallery.module.css";
import Img from "@/components/ui/Img";
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function Gallery({imageSrcs, theme = DIRECTION.HORIZONTAL}) {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    const list = {
        initial: {
            transition: {
            },
        },
        animate: {
            transition: {
                staggerChildren: .25,
                ease: "linear",
                duration: .5
            }
        }
    }
    const listItem = {
        initial: {
            // clipPath: "circle(40%)",
            y: "5%",
            // scale: .9,
            opacity: 0,
        },
        animate: {
            // clipPath: "circle(100%)",
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 1
            }
        }
    }
    return (
        <motion.div ref={ref} initial={"initial"} animate={inView ? "animate" : ""} variants={list} className={styles.gallery + (theme === DIRECTION.VERTICAL ? styles.vertical : "")}>
            {imageSrcs.map((imageSrc, index) =>
                <motion.div className={styles.wrapper} key={index} variants={listItem}>
                    <Img src={imageSrc} layout={"responsive"}/>
                </motion.div>
            )}
        </motion.div>
    )
}

export const DIRECTION = {
    HORIZONTAL: "HORIZONTAL",
    VERTICAL: "VERTICAL",
}