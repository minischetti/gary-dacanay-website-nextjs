import styles from "./index.module.css"
import Release from "@/components/ui/Release";
import MusicPage from "@/components/view/MusicPage";

export default function Home() {
    return (
        <MusicPage>
            <div className={styles.promo}>
                <div className={styles.video}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/oNMjKGADGqM"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <Release imageSrc={"/home/brand-new-day-promo.jpeg"}
                         title={"Brand New Day"}
                         description={"Available now on Spotify and Apple Music"}
                         spotifyUrl={"https://open.spotify.com/album/6bOo7B27gDnbA70Rr4CANU"}
                         appleMusicUrl={"https://music.apple.com/us/album/brand-new-day-single/1551250045"}>
                </Release>
            </div>
        </MusicPage>
    )
}
