import styles from "./Gallery.module.css";
import Img from "@/components/ui/Img";
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function Gallery({imageSrcs, theme = DIRECTION.HORIZONTAL}) {
    const { ref, inView, entry } = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    const list = {
        visible: {
            transition: {
                staggerChildren: .25,
            },
        },
        hidden: {

        }
    }
    const listItem = {
        hidden: {
            clipPath: "circle(40%)",
            scale: .9,
            opacity: 0,
        },
        visible: {
            clipPath: "circle(100%)",
            scale: 1,
            opacity: 1,
        }
    }
    return (
        <motion.div ref={ref} initial={"hidden"} animate={inView ? "visible" : ""} variants={list} transition={{ duration: 1 }} className={styles.gallery + (theme === DIRECTION.VERTICAL ? styles.vertical : "")}>
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