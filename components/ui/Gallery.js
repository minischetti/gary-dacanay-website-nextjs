import styles from "./Gallery.module.css";
import Img from "@/components/ui/Img";

export default function Gallery({imageSrcs, theme = DIRECTION.HORIZONTAL}) {
    return (
        <div className={styles.gallery + (theme === DIRECTION.VERTICAL ? styles.vertical : "")}>
            {imageSrcs.map((imageSrc, index) =>
                <Img src={imageSrc} key={index}/>
            )}
        </div>
    )
}

export const DIRECTION = {
    HORIZONTAL: "HORIZONTAL",
    VERTICAL: "VERTICAL",
}