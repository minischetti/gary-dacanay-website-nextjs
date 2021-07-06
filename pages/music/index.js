import MusicPage from "../../components/MusicPage";
import styles from "./index.module.css"

export default function MusicHome() {
    return (
        <MusicPage>
            <div>
                <h1>Latest Single</h1>
                <p>My latest single, "Brand New Day", is out now on Spotify and Apple Music. Watch the brand new music video for it below!</p>
            </div>
            <div className={styles.promoContent}>
                <div className={styles.video}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/oNMjKGADGqM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <img className={styles.hero} src={"/home/brand-new-day-promo.jpeg"}></img>
            </div>
            <div className={styles.content}>
                <img src="/music/music-bio-hero.jpeg"/>
                <div>
                    <h1>Biography</h1>
                    <p>I have over 30 years of professional playing experience and over 20 years of teaching experience with a B.A. in Music from DePaul University and a M.M. in Guitar Performance from Cleveland State University. I have led my own solo music projects as well as recorded with various rock, blues, jazz and hip hop artists.</p>
                </div>
            </div>
            <div className={styles.content}>
                <img src="/music/music-lessons-hero.jpeg"/>
                <div>
                    <h1>Lessons</h1>
                    <p>Lessons are custom designed to challenge the student to consistently improve and achieve their goals. Students must have Skype or some type of video chat. After submitting a secured payment through PayPal you will receive an email to schedule your online lesson.</p>
                </div>
            </div>
        </MusicPage>
    )
}