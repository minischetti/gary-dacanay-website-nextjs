import styles from "./SocialBar.module.css"

export default function SocialBar({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}