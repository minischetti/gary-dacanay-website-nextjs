import styles from "./HeroImage.module.css";
import Image from "next/image";

export default function HeroImage({imageSrc}) {
    return (
        <div className={styles.hero}>
            <Image src={imageSrc} width={16} height={9} layout={"responsive"}></Image>
        </div>
    )
}