import styles from "./music.module.css";
import BasePage from "@/components/BasePage";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import guitarLessonPlans from "@/data/guitarLessonPlans";
import HeroImage from "@/components/ui/HeroImage";
import {motion} from "framer-motion";

export default function MusicHome() {
    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 1,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    }

    return (
        <BasePage>
            <HeroImage imageSrc={"/music/music-background.jpg"}/>
            <motion.div initial="hidden"
                        animate="visible"
                        variants={list}>
                <Section imageSrc="/music/music-bio-hero.jpeg" title={"Biography"}>
                    <p>I have over 30 years of professional playing experience and over 20 years of teaching experience with a B.A. in Music from DePaul University and a M.M. in Guitar Performance from Cleveland State University. I have led my own solo music projects as well as recorded with various rock, blues, jazz and hip hop artists.</p>
                </Section>
                <Section imageSrc="/music/music-lessons-hero.jpeg" title={"Lessons"}>
                    <p>Lessons are custom designed to challenge the student to consistently improve and achieve their goals. Students must have Skype or some type of video chat. After submitting a secured payment through PayPal you will receive an email to schedule your online lesson.</p>
                    <div className={styles.buttons}>
                        {/*Take each guitar lesson plan and make a button from it */}
                        {guitarLessonPlans.map((plan, index) =>
                            <Button key={index} href={plan.url}>
                                <h1>{plan.price}</h1>
                                <div>
                                    <div>{plan.duration}</div>
                                    {plan.subtext ? <small><i>{plan.subtext}</i></small> : ""}
                                </div>
                            </Button>
                        )}
                    </div>
                </Section>
            </motion.div>
        </BasePage>
    )
}