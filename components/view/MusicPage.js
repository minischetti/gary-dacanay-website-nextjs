import BasePage, {THEME} from "@/components/BasePage";
import Header from "@/components/Header";
import styles from "@/components/BasePage.module.css";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";
import SocialIcon from "@/components/SocialIcon";
import {IoLogoFacebook, IoLogoInstagram, IoLogoYoutube, IoMail} from "react-icons/io5/index";

export default function MusicPage({children}) {
    return (
        <BasePage theme={THEME.DARK}>
            <Header/>
            <div className={styles.content}>
                {children}
            </div>
            <Footer>
                <SocialBar>
                    <SocialIcon url="mailto:gjdacanay@gmail.com" icon={<IoMail size={24}/>}/>
                    <SocialIcon url="https://www.facebook.com/garydacanay" icon={<IoLogoFacebook size={24} />}/>
                    <SocialIcon url="https://www.instagram.com/gary_dacanay" icon={<IoLogoInstagram size={24} />}/>
                    <SocialIcon url="https://www.youtube.com/user/GaryDacanay" icon={<IoLogoYoutube size={24} />}/>
                </SocialBar>
            </Footer>
        </BasePage>
    )
}