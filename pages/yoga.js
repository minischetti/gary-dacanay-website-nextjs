import BasePage, {THEME} from "@/components/BasePage";
import styles from "./yoga.module.css";
import Image from "next/image";

export default function Yoga() {
    return (
        <BasePage theme={THEME.LIGHT}>
            <div className={styles.hero}>
            </div>
            <div>
                <p>I am a 500 Hour Certified <a href="https://www.baptisteyoga.com/trainer-profile/?user=1910" target="_blank" rel={"noreferrer"}>Baptiste Yoga</a> Instructor, serving the Cleveland community at Cleveland Public Schools and family recreation centers. I also teach in corporate settings, lead workshops and master classes. and facilitate private lessons.</p>
                <div className={styles.image}>
                    <Image width="250" height="250" src="/yoga/yoga-hero.jpeg"></Image>
                </div>
            </div>
        </BasePage>
    )
}