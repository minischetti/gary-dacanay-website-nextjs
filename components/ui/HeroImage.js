import styles from "./HeroImage.module.css";
import Image from "next/image";

export default function HeroImage({imageSrc}) {
    return (
        <div className={styles.hero}>
            <Image src={imageSrc} layout={"fill"}></Image>
        </div>
    )
}