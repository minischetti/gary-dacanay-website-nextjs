import HomePage from "@/components/HomePage"
import styles from "./index.module.css"

export default function Home() {
  return (
      <HomePage>
          {/*<div className={styles.banner}>*/}
          {/*    <img src={"/home/brand-new-day-promo.jpeg"}></img>*/}
          {/*    <div>*/}
          {/*        <h1>Brand New Day</h1>*/}
          {/*        <p>Available now on Spotify and Apple Music</p>*/}
          {/*    </div>*/}
          {/*</div>*/}
          <div className={styles.promo}>
              <div className={styles.promoContent}>
                  <div className={styles.video}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/oNMjKGADGqM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <img src={"/home/brand-new-day-promo.jpeg"}></img>
              </div>
              {/*<div>*/}
              {/*  <h1>Brand New Day</h1>*/}
              {/*  <p>Available now on Spotify and Apple Music</p>*/}
              {/*</div>*/}
          </div>
      </HomePage>
  )
}
