import React from "react";
import { urlForImage } from "@/lib/api";
import { IHero } from "@/lib/types";
import style from "./hero.module.css";

const Hero = ({ heading, tagline, image }: IHero) => {

    return (
        <header className={style.hero} style={{backgroundImage: `url(${urlForImage(image.asset._ref).url()})`}}>
            <div className={style.content}>
                {heading ?
                    <h1>{heading}</h1>
                : null}
                {tagline ? 
                    <h2>{tagline}</h2>
                : null}
            </div>
        </header>
    );
};

export default Hero;