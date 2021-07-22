import { motion } from "framer-motion"
import React from "react"
import ListItem from "./ListItem"

export default function AnimatedList({children, className}) {
    const variants = {
        initial: {
            transition: {
            },
        },
        animate: {
            transition: {
                staggerChildren: 1,
                delayChildren: 1,
                ease: "easeOut",
                duration: .5
            }
        }
    }
    const listItem = {
        initial: {
            // clipPath: "circle(40%)",
            y: "5%",
            scale: .9,
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
        <motion.div className={className} variants={variants} initial={"initial"} animate={"animate"}>
            {React.Children.map(children, (child) => (
                <ListItem>{child}</ListItem>
            ))}
        </motion.div>
    )
}