import styles from "./index.module.css"
import Release from "@/components/ui/Release";
import MusicPage from "@/components/view/MusicPage";
import YouTubeVideo from "@/components/ui/YouTubeVideo";

export default function Home() {
    return (
        <MusicPage>
            <div className={styles.promo}>
                <YouTubeVideo embedId="oNMjKGADGqM"/>
                <Release imageSrc={"/releases/brand-new-day.jpeg"}
                         title={"Brand New Day"}
                         description={"Available now on Spotify and Apple Music"}
                         spotifyUrl={"https://open.spotify.com/album/6bOo7B27gDnbA70Rr4CANU"}
                         appleMusicUrl={"https://music.apple.com/us/album/brand-new-day-single/1551250045"}>
                </Release>
            </div>
        </MusicPage>
    )
}
