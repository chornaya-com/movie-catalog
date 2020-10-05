import React from "react";
import * as cn from "./Footer.module.css";

export function Footer() {
    return (
        <div className={cn.footer}>
            <div> This product uses the TMDb API but is not endorsed or certified by TMDb.</div>
            <img className={cn.footerImage}
                 src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
                 alt=""/>

        </div>
    );
}