import styles from "./Button.module.css";

export default function Button({href, children}) {
    return (
        <a className={styles.button} href={href} rel={"noreferrer"}>
            {children}
        </a>
    )
}