import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
    return (
        <header>
            <Link href="/">
                <h1>Gary Dacanay</h1>
            </Link>
            <div>
                <Link href="/music">Music</Link>
                <Link href="/yoga">Yoga</Link>
            </div>
        </header>
    )
}