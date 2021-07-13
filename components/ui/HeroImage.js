import styles from "./HeroImage.module.css";
import Image from "next/image";
import {motion, useViewportScroll} from "framer-motion";

export default function HeroImage({imageSrc}) {
    const { scrollYProgress } = useViewportScroll();

    const variants = {
        hidden: { scale: .5},
        visible: { scale: 1},
    }

    return (
        <motion.div className={styles.hero}
                    initial="hidden"
                    animate="visible"
                    variants={variants}>
            <Image src={imageSrc} width={16} height={9} layout={"responsive"}></Image>
        </motion.div>
    )
}