import styles from "./music.module.css";
import BasePage from "@/components/BasePage";
import Image from "next/image";

export default function MusicHome() {
    return (
        <BasePage>
            <div className={styles.hero}>
                <div className={styles.imagesContainer}>
                    <div className={styles.images}>
                        <div className={styles.imageContainer}>
                            <Image src={"/music/music-0.jpg"}
                                   layout='fill'
                                   objectFit='contain'>
                            </Image>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src={"/music/music-1.jpg"}
                                   layout='fill'
                                   objectFit='contain'>
                            </Image>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src={"/music/music-2.jpg"}
                                   layout='fill'
                                   objectFit='contain'>

                            </Image>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image src={"/music/music-3.jpg"}
                                   layout='fill'
                                   objectFit='contain'>

                            </Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sections}>
                <div className={styles.section}>
                    <div className={styles.imageContainer}>
                        <Image src="/music/music-bio-hero.jpeg" width="250" height="250" layout={"responsive"}/>
                    </div>
                    <div className={styles.sectionContent}>
                        <h1>Biography</h1>
                        <p>I have over 30 years of professional playing experience and over 20 years of teaching experience with a B.A. in Music from DePaul University and a M.M. in Guitar Performance from Cleveland State University. I have led my own solo music projects as well as recorded with various rock, blues, jazz and hip hop artists.</p>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.imageContainer}>
                        <Image src="/music/music-lessons-hero.jpeg" width="250" height="250" layout={"responsive"}/>
                    </div>
                    <div className={styles.sectionContent}>
                        <h1>Lessons</h1>
                        <p>Lessons are custom designed to challenge the student to consistently improve and achieve their goals. Students must have Skype or some type of video chat. After submitting a secured payment through PayPal you will receive an email to schedule your online lesson.</p>
                        <div className={styles.buttons}>
                            <a className={styles.button} href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U6NBLTBBUM3Z6" rel={"noreferrer"}>
                                <h1>$30</h1>
                                <div>30 minutes</div>
                            </a>
                            <a className={styles.button} href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZHES8BN98QNZJ" rel={"noreferrer"}>
                                <h1>$50</h1>
                                <div>
                                    <div>60 minutes</div>
                                    <small><i>Extra savings!</i></small>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </BasePage>
    )
}