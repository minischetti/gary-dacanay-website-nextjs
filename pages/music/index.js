import styles from "./index.module.css";
import BasePage from "@/components/BasePage";

export default function MusicHome() {
    return (
        <BasePage>
            <div className={styles.hero}>
            </div>
            <div>
                <div className={styles.section}>
                    {/*<img className={styles.img} src="/music/music-bio-hero.jpeg"/>*/}
                    <p>I have over 30 years of professional playing experience and over 20 years of teaching experience with a B.A. in Music from DePaul University and a M.M. in Guitar Performance from Cleveland State University. I have led my own solo music projects as well as recorded with various rock, blues, jazz and hip hop artists.</p>
                </div>
                <div className={styles.section}>
                    <div>
                        <h1>Lessons</h1>
                        <p>Lessons are custom designed to challenge the student to consistently improve and achieve their goals. Students must have Skype or some type of video chat. After submitting a secured payment through PayPal you will receive an email to schedule your online lesson.</p>
                        <div className={styles.buttons}>
                            <a className={styles.button} href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U6NBLTBBUM3Z6">
                                <h1>$30</h1>
                                <div>30 minutes</div>
                            </a>
                            <a className={styles.button} href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZHES8BN98QNZJ">
                                <h1>$50</h1>
                                <div>
                                    <div>60 minutes</div>
                                    <small><i>Extra savings!</i></small>
                                </div>
                            </a>
                        </div>
                    </div>
                    <img src="/music/music-lessons-hero.jpeg"/>
                </div>
            </div>
        </BasePage>
    )
}