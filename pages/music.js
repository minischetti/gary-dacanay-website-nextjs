import styles from "./music.module.css";
import Section from "@/components/ui/Section";
import HeroImage from "@/components/ui/HeroImage";
import Gallery from "@/components/ui/Gallery";
import musicBackground from "../public/music/music-background.jpg";
import music0 from "../public/music/music-0.jpg";
import music2 from "../public/music/music-2.jpg";
import music3 from "../public/music/music-3.jpg";

import React from "react";
import MusicPage from "@/components/view/MusicPage";
import Venmo from "@/components/ui/Venmo";

export default function Music() {
    return (
        <MusicPage>
            <HeroImage imageSrc={musicBackground}/>
            <div className= {styles.sections}>
                <Section title="Biography">
                    <p>I have over 30 years of professional playing experience and over 20 years of teaching experience with a B.A. in Music from DePaul University and a M.M. in Guitar Performance from Cleveland State University. I have led my own solo music projects as well as recorded with various rock, blues, jazz and hip hop artists.</p>
                </Section>
                <Section title="Lessons">
                    <p>Lessons are custom designed to challenge the student to consistently improve and achieve their goals. Students must have Skype or some type of video chat. After submitting a secured payment through Venmo you will receive an email to schedule your online lesson.</p>
                    <Venmo tag="guitarfire"/>
                </Section>
            </div>
            <Gallery imageSrcs={[music0, music3, music2]}/>
        </MusicPage>
    )
}