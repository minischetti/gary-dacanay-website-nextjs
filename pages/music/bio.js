import MusicPage from "../../components/MusicPage";
import styles from "@/components/MusicPage.module.css"

export default function MusicBio() {
    return (
        <MusicPage>
            <div className={styles.content}>
                <p>I have over 30 years of professional playing experience and over 20 years of teaching experience with a B.A. in Music from DePaul University and a M.M. in Guitar Performance from Cleveland State University. I have led my own solo music projects as well as recorded with various rock, blues, jazz and hip hop artists.</p>
                <img src="/music/music-bio-hero.jpeg"/>
            </div>
        </MusicPage>
    )
}