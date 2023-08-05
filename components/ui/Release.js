import styles from "./Release.module.css";
import { SiApple, SiSpotify } from "react-icons/si/index";
import Img from "@/components/ui/Img";
import SlideIn from "./SlideIn";
import Button from "@/components/ui/Button";

export default function Release({ imageSrc, title, description, spotifyUrl, appleMusicUrl, children }) {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-10 border-solid border-zinc-700 border rounded-lg">
            <div className={styles.image}>
                <Img width="350" height="350" src={imageSrc}></Img>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
                <div>
                    <div className="text-4xl">{title}</div>
                    {description ? <p>{description}</p> : null}
                </div>
                <div className="grid gap-2">
                    {spotifyUrl ? <Button href={spotifyUrl}><SiSpotify />Spotify</Button> : null}
                    {appleMusicUrl ? <Button href={appleMusicUrl}><SiApple />Apple Music</Button> : null}
                    {children}
                </div>
            </div>
        </div>
    )
}