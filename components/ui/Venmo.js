import styles from "./Venmo.module.css";
import {IoLogoVenmo} from "react-icons/io5/index";
import React from "react";
import { ArrowRight } from "@phosphor-icons/react";

export default function Venmo({tag}) {
    return (
        <div className="flex gap-2 py-4 items-center text-xs">
            <IoLogoVenmo size={24}/>
            <div className={styles.tag}>@{tag}</div>
            {/* <ArrowRight size={24}/> */}
        </div>
    )
}