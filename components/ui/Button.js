import styles from "./Button.module.css";

export default function Button({href, children}) {
    return (
        <a className="flex gap-2 items-center justify-center font-medium bg-zinc-700 px-8 py-4 rounded-lg hover:bg-zinc-600 shadow-zinc-900 shadow-md" href={href} target={"_blank"} rel={"noreferrer"} tabIndex={0}>
            {children}
        </a>
    )
}