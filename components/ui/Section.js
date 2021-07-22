import styles from "./Section.module.css";
import React from "react";
import SlideIn from "@/components/ui/SlideIn";

export default function Section({title, children}) {
    return (
        <SlideIn className={styles.section}>
            <SlideIn>
                <div className={styles.title}>{title}</div>
            </SlideIn>
            <SlideIn className={styles.sectionContent}>
                {React.Children.map(children, (child) => (
                    <SlideIn>{child}</SlideIn>
                ))}
            </SlideIn>
        </SlideIn>
    )
}