import Section from "@/components/ui/Section";
import { IconLink } from "@/components/ui/Link";
import YogaPage from "@/components/view/YogaPage";

export default function Yoga() {
    return (
        <YogaPage>
            <div className="block rounded-lg overflow-hidden">
                <swiper-container navigation="true" pagination="true" scrollbar="true" loop>
                    {["yoga/yoga-background.jpg", "yoga/gallery/yoga-1.jpeg", "yoga/gallery/yoga-2.jpeg", "yoga/gallery/yoga-3.jpeg"].map((src, index) => (
                        <swiper-slide key={index} lazy="true">
                            <img src={src} loading="lazy" alt="Yoga image"></img>
                        </swiper-slide>
                    ))}
                </swiper-container>
            </div>
            <div className="grid gap-4 my-4">
                <Section title="Biography">
                    <p>I am a 500 Hour Certified Baptiste Yoga Instructor, serving the Cleveland community at Cleveland Public Schools and family recreation centers. I also teach in corporate settings, lead workshops and master classes, and facilitate private lessons.</p>
                    <IconLink href={"https://www.youcanyouwill.org/gary-dacanay.html"}>Learn more</IconLink>
                </Section>
            </div>
        </YogaPage>
    )
}