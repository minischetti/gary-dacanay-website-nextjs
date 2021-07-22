import React from "react";
import { motion } from "framer-motion";
import {useInView} from "react-intersection-observer";

export default function SlideIn({children, className}) {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    const listVariants = {
        initial: {
            y: "10%",
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
        <motion.div className={className} ref={ref} variants={listVariants} initial={"initial"} animate={inView ? "animate" : ""}   >
            {children}
        </motion.div>
    )
}