import styles from "./index.module.css"
import BasePage from "@/components/BasePage";
import {SiSpotify, SiApple} from "react-icons/si"

export default function Home() {
  return (
      <BasePage>
          <div className={styles.promo}>
              <div className={styles.video}>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/oNMjKGADGqM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className={styles.release}>
                    <img src={"/home/brand-new-day-promo.jpeg"}></img>
                  <div class={styles.image}>
                  </div>
                  <div className={styles.releaseContent}>
                      <div>
                          <div className={styles.title}>Brand New Day</div>
                          <p>Available now on Spotify and Apple Music</p>
                      </div>
                      <div className={styles.buttons}>
                          <a href="" className={styles.button}><SiSpotify/>Spotify</a>
                          <a href="" className={styles.button}><SiApple/>Apple Music</a>
                      </div>
                  </div>
              </div>
          </div>
      </BasePage>
  )
}
