import styles from "./Section.module.css";
import React from "react";
import SlideIn from "@/components/ui/SlideIn";

export default function Section({title, children}) {
    return (
        <div className="grid p-8 rounded-lg bg-zinc-300 dark:bg-zinc-800">
            <div className="text-md uppercase italic font-bold">{title}</div>
            <div className="text-sm">
                {React.Children.map(children, (child) => (
                    <div>{child}</div>
                ))}
            </div>
        </div>
    )
}