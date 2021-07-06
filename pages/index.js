import HomePage from "@/components/HomePage"
import styles from "./index.module.css"

export default function Home() {
  return (
      <HomePage>
          <div className={styles.promo}>
              <div>
                  <h1>NEW SINGLE</h1>
                  <p>"Brand New Day" now on Spotify and Apple Music.</p>
              </div>
              <div className={styles.promoContent}>
                  <div className={styles.video}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/oNMjKGADGqM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <img className={styles.hero} src={"/home/brand-new-day-promo.jpeg"}></img>
              </div>
          </div>
      </HomePage>
  )
}
