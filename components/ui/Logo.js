import styles from "@/components/ui/Logo.module.css";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" passHref>
            <div className={styles.logo}>Gary <span className={styles.bold}>Dacanay</span></div>
        </Link>
    )
}

