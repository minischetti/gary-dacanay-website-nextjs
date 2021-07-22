import { motion } from "framer-motion"

export default function ListItem({children}) {
    const listItem = {
        initial: {
            // clipPath: "circle(40%)",
            y: "5%",
            // scale: .9,
            opacity: 0,
        },
        animate: {
            // clipPath: "circle(100%)",
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 1
            }
        }
    }
    return (
        <motion.div variants={listItem} initial={"initial"} animate={"animate"}>{children}</motion.div>
    )
}