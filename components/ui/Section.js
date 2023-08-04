import styles from "./Section.module.css";
import React from "react";
import SlideIn from "@/components/ui/SlideIn";

export default function Section({title, children}) {
    return (
        <div className={styles.section}>
            <div className={styles.title}>{title}</div>
            <div className={styles.sectionContent}>
                {React.Children.map(children, (child) => (
                    <div>{child}</div>
                ))}
            </div>
        </div>
    )
}