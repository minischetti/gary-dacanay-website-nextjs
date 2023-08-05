import Section from "@/components/ui/Section";
import { IconLink } from "@/components/ui/Link";
import YogaPage from "@/components/view/YogaPage";
import yogaBackground from "../public/yoga/yoga-background.jpg"
import yoga1 from "../public/yoga/gallery/yoga-1.jpeg";
import yoga2 from "../public/yoga/gallery/yoga-2.jpeg";
import yoga3 from "../public/yoga/gallery/yoga-3.jpeg";
import Image from "next/image";

export default function Yoga() {
    return (
        <YogaPage>
            <div className="block rounded-lg overflow-hidden">
                <swiper-container navigation="true" pagination="true" scrollbar="true" loop>
                    {[yogaBackground, yoga1, yoga2, yoga3].map((src, index) => (
                        <swiper-slide key={index} lazy="true">
                            <Image src={src} loading="lazy" alt="Yoga image"></Image>
                        </swiper-slide>
                    ))}
                </swiper-container>
            </div>
            <div className="grid gap-4 my-4">
                <Section title="Biography">
                    <p>I am a 500 Hour Certified Baptiste Yoga Instructor, serving the Cleveland community at Cleveland Public Schools and family recreation centers. I also teach in corporate settings, lead workshops and master classes, and facilitate private lessons.</p>
                    <IconLink href={"https://www.baptisteyoga.com/trainer-profile/?user=1910"}>Learn more</IconLink>
                </Section>
            </div>
        </YogaPage>
    )
}