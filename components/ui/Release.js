import styles from "./Release.module.css";
import {SiApple, SiSpotify} from "react-icons/si/index";
import Img from "@/components/ui/Img";
import SlideIn from "./SlideIn";
import Button from "@/components/ui/Button";

export default function Release({imageSrc, title, description, spotifyUrl, appleMusicUrl}) {
    return (
        <SlideIn>
            <div className={styles.release}>
                <div className={styles.image}>
                    <Img width="500" height="500" src={imageSrc} layout={"responsive"}></Img>
                </div>
                <div className={styles.releaseContent}>
                    <div>
                        <div className={styles.title}>{title}</div>
                        <p>{description}</p>
                    </div>
                    <div className={styles.buttons}>
                        <Button href={spotifyUrl}><SiSpotify/>Spotify</Button>
                        <Button className={styles.button}><SiApple/>Apple Music</Button>
                    </div>
                </div>
            </div>
        </SlideIn>
    )
}