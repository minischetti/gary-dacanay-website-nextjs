import BasePage, {THEME} from "@/components/BasePage";
import Header from "@/components/Header";
import styles from "@/components/BasePage.module.css";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";
import SocialIcon from "@/components/SocialIcon";
import {IoLogoFacebook, IoLogoInstagram, IoLogoYoutube, IoMail} from "react-icons/io5/index";
import Subscribe from "../Subscribe";

export default function YogaPage({children}) {
    return (
        <div className="light bg-zinc-200">
            <Header/>
            <div className={styles.content}>
                {children}
            </div>
            <Footer>
                <Subscribe/>
                <SocialBar>
                    <SocialIcon url="mailto:gjdacanay@gmail.com" icon={<IoMail size={24}/>}/>
                    <SocialIcon url="https://www.instagram.com/gary_dacanay_yoga" icon={<IoLogoInstagram size={24} />}/>
                    <SocialIcon url="https://www.youtube.com/user/GaryDacanay" icon={<IoLogoYoutube size={24} />}/>
                </SocialBar>
            </Footer>
        </div>
    )
}