import styles from "@/components/ui/Logo.module.css";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Logo() {
    const router = useRouter()
    const currentPath = router.pathname;
    return (
        <Link href="/" passHref>
            <div className={currentPath === "/" ? "uppercase font-bold" : "uppercase font-normal"}>Gary <span>Dacanay</span></div>
        </Link>
    )
}

