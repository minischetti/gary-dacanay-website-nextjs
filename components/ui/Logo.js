import styles from "@/components/ui/Logo.module.css";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <div className={styles.logo}>Gary <strong>Dacanay</strong></div>
        </Link>
    )
}

