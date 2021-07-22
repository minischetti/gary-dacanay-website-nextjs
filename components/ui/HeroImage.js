import styles from "./HeroImage.module.css";
import Image from "next/image";
import {motion, useViewportScroll, useTransform} from "framer-motion";
import Img from "@/components/ui/Img";
import { useInView } from 'react-intersection-observer';
import {useState, useEffect, useRef} from "react";
import SlideIn from "./SlideIn";

export default function HeroImage({imageSrc}) {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.75]);
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    const variants = {
        initial: {

            boxShadow: "0 0 1em red"
        },
        animate: {
            scale: 1,
            boxShadow: "0 0 1em blue"
        }
    }

    return (
        <SlideIn className={styles.hero}>
            <motion.div style={{scale: scale}}>
                <Img src={imageSrc} layout={"responsive"}></Img>
            </motion.div>
        </SlideIn>
    )
}