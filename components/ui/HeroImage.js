import styles from "./HeroImage.module.css";
import {motion, useViewportScroll, useTransform} from "framer-motion";
import Img from "@/components/ui/Img";
import SlideIn from "./SlideIn";

export default function HeroImage({imageSrc}) {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.75]);

    return (
        <SlideIn className={styles.hero}>
            <motion.div style={{scale: scale}}>
                <Img src={imageSrc} layout={"responsive"}></Img>
            </motion.div>
        </SlideIn>
    )
}