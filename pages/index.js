import styles from "./index.module.css"
import BasePage from "@/components/BasePage";
import {SiSpotify, SiApple} from "react-icons/si"
import Image from "next/image";

export default function Home() {
  return (
      <BasePage>
          <div className={styles.promo}>
              <div className={styles.video}>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/oNMjKGADGqM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className={styles.release}>
                    <Image src={"/home/brand-new-day-promo.jpeg"}></Image>
                  <div className={styles.image}>
                  </div>
                  <div className={styles.releaseContent}>
                      <div>
                          <div className={styles.title}>Brand New Day</div>
                          <p>Available now on Spotify and Apple Music</p>
                      </div>
                      <div className={styles.buttons}>
                          <a href="https://open.spotify.com/album/6bOo7B27gDnbA70Rr4CANU" target={"_blank"} rel={"noreferrer"} className={styles.button}><SiSpotify/>Spotify</a>
                          <a href="https://music.apple.com/us/album/brand-new-day-single/1551250045" target={"_blank"} rel={"noreferrer"} className={styles.button}><SiApple/>Apple Music</a>
                      </div>
                  </div>
              </div>
          </div>
      </BasePage>
  )
}
