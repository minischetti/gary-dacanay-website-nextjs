import styles from "./index.module.css"
import Release from "@/components/ui/Release";
import MusicPage from "@/components/view/MusicPage";
import YouTubeVideo from "@/components/ui/YouTubeVideo";
import brandNewDay from "../public/releases/brand-new-day.jpeg";
import keepOnGoing from "../public/releases/keep-on-going.jpeg";
import takeItSlow from "../public/releases/take-it-slow.jpeg";
import randomRoad from "../public/releases/random-road.jpeg";

export default function Home() {
    return (
        <MusicPage>
            <div className={styles.promo}>
                <div className={styles.releases}>
                    <Release imageSrc={randomRoad}
                        title={"Random Road"}
                        description={"Available now on Spotify and Apple Music"}
                        spotifyUrl={"https://open.spotify.com/album/4k3pJSqC21jwll71Q7dyUK?si=KMxXpr7MTNaGCe581GDFvw"}
                        appleMusicUrl={"https://music.apple.com/us/album/random-road-ep/1684457684"}>
                    </Release>
                    <Release imageSrc={takeItSlow}
                        title={"Take It Slow"}
                        description={"Available now on Spotify and Apple Music"}
                        spotifyUrl={"https://open.spotify.com/album/4k3pJSqC21jwll71Q7dyUK?si=KMxXpr7MTNaGCe581GDFvw"}
                        appleMusicUrl={"https://music.apple.com/us/album/take-it-slow-single/1632497333"}>
                    </Release>
                    <div className={styles.video}>
                        <YouTubeVideo embedId="LZE8NTRSx2w" />
                    </div>
                    <Release imageSrc={brandNewDay}
                        title={"Brand New Day"}
                        description={"Available now on Spotify and Apple Music"}
                        spotifyUrl={"https://open.spotify.com/album/6bOo7B27gDnbA70Rr4CANU"}
                        appleMusicUrl={"https://music.apple.com/us/album/brand-new-day-single/1551250045"}>
                    </Release>
                    <div className={styles.video}>
                        <YouTubeVideo embedId="oNMjKGADGqM" />
                    </div>
                    <Release imageSrc={keepOnGoing}
                        title={"Keep On Going"}
                        description={"Available now on Spotify and Apple Music"}
                        spotifyUrl={"https://open.spotify.com/album/6DCADEncWoSO0PSFIHNNhX"}
                        appleMusicUrl={"https://music.apple.com/us/album/keep-on-going-single/1577093788"}>
                    </Release>
                </div>
            </div>
        </MusicPage>
    )
}
