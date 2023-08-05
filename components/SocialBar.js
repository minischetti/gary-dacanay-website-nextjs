import styles from "./SocialBar.module.css"

export default function SocialBar({children}) {
    return (
        <div className="flex gap-4 my-4">
            {children}
        </div>
    )
}