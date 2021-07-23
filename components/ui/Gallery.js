import styles from "./Gallery.module.css";
import Img from "@/components/ui/Img";
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function Gallery({imageSrcs}) {
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
            y: "5%",
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 1
            }
        }
    }
    return (
        <motion.div ref={ref} initial={"initial"} animate={inView ? "animate" : ""} variants={list} className={styles.gallery}>
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