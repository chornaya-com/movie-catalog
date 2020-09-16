import React from "react";
import * as cn from "./Movie.module.css";

export function Movie({name, price, description, image}) {

    return (
        <div className={cn.movie}>
            <img src={image} alt=""/>
            <div className={cn.movieInfo}>
                <strong>{name}</strong>
                <p>£ {price}</p>
                <div className={cn.movieDescription}>{description}</div>
            </div>
        </div>
    )
}