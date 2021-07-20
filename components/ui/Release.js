import styles from "./Release.module.css";
import {SiApple, SiSpotify} from "react-icons/si/index";
import Img from "@/components/ui/Img";

export default function Release({imageSrc, title, description, spotifyUrl, appleMusicUrl}) {
    return (
        <div className={styles.release}>
            <div className={styles.releaseContent}>
                <div>
                    <div className={styles.title}>{title}</div>
                    <p>{description}</p>
                </div>
                <div className={styles.buttons}>
                    <a href={spotifyUrl} target={"_blank"} rel={"noreferrer"} className={styles.button}><SiSpotify/>Spotify</a>
                    <a href={appleMusicUrl} target={"_blank"} rel={"noreferrer"} className={styles.button}><SiApple/>Apple Music</a>
                </div>
            </div>
            <div className={styles.image}>
                <Img width="500" height="500" src={imageSrc} layout={"responsive"}></Img>
            </div>
        </div>
    )
}