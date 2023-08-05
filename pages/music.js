import styles from "./music.module.css";
import Section from "@/components/ui/Section";
import HeroImage from "@/components/ui/HeroImage";
import Gallery from "@/components/ui/Gallery";
import musicBackground from "../public/music/music-background.jpg";
import music0 from "../public/music/music-0.jpg";
import music1 from "../public/music/music-1.jpg";
import music2 from "../public/music/music-2.jpg";

import React from "react";
import MusicPage from "@/components/view/MusicPage";
import Venmo from "@/components/ui/Venmo";
import Divider from "@/components/ui/Divider";
import Image from "next/image";

export default function Music() {
    return (
        <MusicPage>
            <div className="block">
                <swiper-container navigation="true" pagination="true" scrollbar="true" loop>
                    {[musicBackground, music0, music1, music2].map((src) => (
                        <swiper-slide>
                            <Image src={src}></Image>
                        </swiper-slide>
                    ))}
                </swiper-container>
                <div className="grid gap-4 my-4">
                    <Section title="Biography">
                        <p>I have over 30 years of professional playing experience. I lead my own solo music projects as well as record with various rock, blues, jazz and hip hop artists.</p>
                    </Section>
                    <Section title="Lessons">
                        <p>I have over 20 years of teaching experience with a B.A. in Music from DePaul University and a M.M. in Guitar Performance from Cleveland State University. Lessons are custom designed to challenge the student to consistently improve and achieve their goals. Students must have Skype or some type of video chat. After submitting a secured payment through Venmo you will receive an email to schedule your online lesson.</p>
                        <Venmo tag="guitarfire" />
                    </Section>
                </div>
            </div>
        </MusicPage>
    )
}