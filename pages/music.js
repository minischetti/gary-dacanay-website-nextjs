import styles from "./music.module.css";
import BasePage from "@/components/BasePage";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import guitarLessonPlans from "@/data/guitarLessonPlans";
import HeroImage from "@/components/ui/HeroImage";
import {motion} from "framer-motion";
import Gallery, {DIRECTION} from "@/components/ui/Gallery";
import Img from "@/components/ui/Img";
import musicBackground from "../public/music/music-background.jpg";
import music0 from "../public/music/music-0.jpg";
import music1 from "../public/music/music-1.jpg";
import music2 from "../public/music/music-2.jpg";
import music3 from "../public/music/music-3.jpg";
import {IoLogoVenmo} from "react-icons/io5";

import React from "react";
import Release from "@/components/ui/Release";
import MusicPage from "@/components/view/MusicPage";

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
        <MusicPage>
            <HeroImage imageSrc={musicBackground}/>
            <motion.div initial="hidden"
                        animate="visible"
                        variants={list}
                        className={styles.sections}>
                <Section title={"Biography"}>
                    <p>I have over 30 years of professional playing experience and over 20 years of teaching experience with a B.A. in Music from DePaul University and a M.M. in Guitar Performance from Cleveland State University. I have led my own solo music projects as well as recorded with various rock, blues, jazz and hip hop artists.</p>
                </Section>
                <Section title={"Lessons"}>
                    <p>Lessons are custom designed to challenge the student to consistently improve and achieve their goals. Students must have Skype or some type of video chat. After submitting a secured payment through Venmo you will receive an email to schedule your online lesson.</p>
                    <div className={styles.venmo}>
                        <IoLogoVenmo size={48}/>
                        <div className={styles.venmoTag}>@guitarfire</div>
                    </div>
                </Section>
            </motion.div>
            <Gallery imageSrcs={[music0, music3, music2]}/>
        </MusicPage>
    )
}