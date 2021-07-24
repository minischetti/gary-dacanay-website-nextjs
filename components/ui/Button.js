import styles from "./Button.module.css";

export default function Button({href, children}) {
    return (
        <a className={styles.button} href={href} target={"_blank"} rel={"noreferrer"} tabIndex={0}>
            {children}
        </a>
    )
}