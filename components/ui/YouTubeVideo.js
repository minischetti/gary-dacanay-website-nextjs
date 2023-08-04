import styles from "./YouTubeVideo.module.css";
import SlideIn from "./SlideIn";

export default function YouTubeVideo({embedId}) {
    return (
        <div className={styles.video}>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + embedId}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen scrolling={"no"}></iframe>
        </div>
    )
}