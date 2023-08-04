import HeroImage from "@/components/ui/HeroImage";
import Section from "@/components/ui/Section";
import Gallery from "@/components/ui/Gallery";
import {IconLink} from "@/components/ui/Link";
import YogaPage from "@/components/view/YogaPage";
import yogaBackground from "../public/yoga/yoga-background.jpg"
import yoga1 from "../public/yoga/gallery/yoga-1.jpeg";
import yoga2 from "../public/yoga/gallery/yoga-2.jpeg";
import yoga3 from "../public/yoga/gallery/yoga-3.jpeg";

export default function Yoga() {
    return (
        <YogaPage>
            <HeroImage imageSrc={yogaBackground}/>
            <Section title="Biography">
                <p>I am a 500 Hour Certified Baptiste Yoga Instructor, serving the Cleveland community at Cleveland Public Schools and family recreation centers. I also teach in corporate settings, lead workshops and master classes, and facilitate private lessons.</p>
                <IconLink href={"https://www.baptisteyoga.com/trainer-profile/?user=1910"}>Learn more</IconLink>
            </Section>
            <Gallery imageSrcs={[yoga1, yoga2, yoga3]}/>
        </YogaPage>
    )
}