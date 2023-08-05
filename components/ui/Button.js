import styles from "./Button.module.css";

export default function Button({href, children}) {
    return (
        <a className="flex gap-2 items-center justify-center bg-zinc-800 px-10 py-5 rounded-lg hover:bg-zinc-700" href={href} target={"_blank"} rel={"noreferrer"} tabIndex={0}>
            {children}
        </a>
    )
}