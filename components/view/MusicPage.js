import BasePage, {THEME} from "@/components/BasePage";
import Header from "@/components/Header";
import styles from "@/components/BasePage.module.css";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";
import SocialIcon from "@/components/SocialIcon";
import {IoLogoFacebook, IoLogoInstagram, IoLogoYoutube, IoMail} from "react-icons/io5/index";
import Subscribe from "../Subscribe";

export default function MusicPage({children}) {
    return (
        <div className="bg-zinc-900 text-zinc-300">
            <Header/>
            <div className={styles.content}>
                {children}
            </div>
            <Footer>
                <Subscribe/>
                <SocialBar>
                    <SocialIcon url="mailto:gjdacanay@gmail.com" icon={<IoMail size={24}/>}/>
                    <SocialIcon url="https://www.facebook.com/profile.php?id=100083527954006&mibextid=LQQJ4d" icon={<IoLogoFacebook size={24} />}/>
                    <SocialIcon url="https://www.instagram.com/gary_dacanay_band" icon={<IoLogoInstagram size={24} />}/>
                    <SocialIcon url="https://www.youtube.com/user/GaryDacanay" icon={<IoLogoYoutube size={24} />}/>
                </SocialBar>
            </Footer>
        </div>
    )
}