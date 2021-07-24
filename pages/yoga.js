import HeroImage from "@/components/ui/HeroImage";
import Section from "@/components/ui/Section";

// import yoga1 from "../public/yoga/yoga-1.jpeg";
// import yoga2 from "../public/yoga/yoga-2.jpeg";
// const {test} = await import("../public/yoga/gallery/yoga-3.jpeg").then(module => module);
// console.log(test);
import Gallery from "@/components/ui/Gallery";
import {Link} from "@/components/ui/Link";

const getFiles = (directory) => {
    const filesContext = require.context("public/yoga/gallery", false, /.*jpeg/);
    console.log(filesContext);
    const fileKeys = filesContext.keys();
    const modules = fileKeys.map(key => filesContext(key).default);
    const deDupedModules = [... new Set(modules)];
    return deDupedModules;
}

const yogaPictures = getFiles("public/yoga/gallery");
console.log(yogaPictures);


import yogaBackground from "../public/yoga/yoga-background.jpg"
import YogaPage from "@/components/view/YogaPage";

export default function Yoga() {
    return (
        <YogaPage>
            <HeroImage imageSrc={yogaBackground}/>
            <Section title="Biography">
                <p>I am a 500 Hour Certified Baptiste Yoga Instructor, serving the Cleveland community at Cleveland Public Schools and family recreation centers. I also teach in corporate settings, lead workshops and master classes, and facilitate private lessons.</p>
                <Link href={"https://www.baptisteyoga.com/trainer-profile/?user=1910"}>Learn more</Link>
            </Section>
            <Gallery imageSrcs={yogaPictures}/>
        </YogaPage>
    )
}