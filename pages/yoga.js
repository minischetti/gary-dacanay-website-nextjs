import BasePage, {THEME} from "@/components/BasePage";
import styles from "./yoga.module.css";
import HeroImage from "@/components/ui/HeroImage";
import Section from "@/components/ui/Section";

// Import Swiper styles
import "swiper/swiper.min.css";

// import Swiper core and required modules
import SwiperCore, {
    Autoplay
} from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import {motion} from "framer-motion";
import React from "react";

// install Swiper modules
SwiperCore.use([Autoplay]);

import yoga1 from "../public/yoga/yoga-1.jpeg";
import yoga2 from "../public/yoga/yoga-2.jpeg";
import yoga3 from "../public/yoga/yoga-3.jpeg";
import Gallery from "@/components/ui/Gallery";

export default function Yoga() {
    return (
        <BasePage theme={THEME.LIGHT}>
            <HeroImage imageSrc={"/yoga/yoga-background.jpg"}/>
            <Section imageSrc="/yoga/yoga-hero.jpeg" title={"Biography"}>
                <p>I am a 500 Hour Certified <a href="https://www.baptisteyoga.com/trainer-profile/?user=1910" target="_blank" rel={"noreferrer"}>Baptiste Yoga</a> Instructor, serving the Cleveland community at Cleveland Public Schools and family recreation centers. I also teach in corporate settings, lead workshops and master classes. and facilitate private lessons.</p>
            </Section>
            <Gallery imageSrcs={[yoga1, yoga2, yoga3]}/>
        </BasePage>
    )
}

// export const getInitialProps = async (ctx) => {
//     const glob = require('glob');
//
//     const yogaPictures = glob.sync("/public/yoga/*.jpeg");
//     return {
//         props: {
//             yogaPictures: yogaPictures
//         }
//     }
// }
