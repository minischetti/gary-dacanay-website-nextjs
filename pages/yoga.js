import HeroImage from "@/components/ui/HeroImage";
import Section from "@/components/ui/Section";

import yoga1 from "../public/yoga/yoga-1.jpeg";
import yoga2 from "../public/yoga/yoga-2.jpeg";
import yoga3 from "../public/yoga/yoga-3.jpeg";
import Gallery from "@/components/ui/Gallery";
import {Link} from "@/components/ui/Link";

import yogaBackground from "../public/yoga/yoga-background.jpg"
import YogaPage from "@/components/view/YogaPage";
import Divider from "@/components/ui/Divider";

export default function Yoga() {
    return (
        <YogaPage>
            <HeroImage imageSrc={yogaBackground}/>
            <Section title={"Biography"}>
                <p>I am a 500 Hour Certified Baptiste Yoga Instructor, serving the Cleveland community at Cleveland Public Schools and family recreation centers. I also teach in corporate settings, lead workshops and master classes. and facilitate private lessons.</p>
                <Link href={"https://www.baptisteyoga.com/trainer-profile/?user=1910"}>Read more at the Baptiste Institute</Link>
            </Section>
            <Gallery imageSrcs={[yoga1, yoga3, yoga2]}/>
        </YogaPage>
    )
}
