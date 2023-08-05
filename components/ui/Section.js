import styles from "./Section.module.css";
import React from "react";
import SlideIn from "@/components/ui/SlideIn";

export default function Section({title, children}) {
    return (
        <div className="grid border-solid border-zinc-800 border p-8 bg-zinc-800 rounded-lg">
            <div className="text-md uppercase italic font-bold">{title}</div>
            <div className="text-sm">
                {React.Children.map(children, (child) => (
                    <div>{child}</div>
                ))}
            </div>
        </div>
    )
}