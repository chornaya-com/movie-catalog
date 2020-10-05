import React from "react";
import * as cn from "./Movie.module.css";

export function Movie({name, description, image, rating, maxRating}) {

    return (
        <div className={cn.movie}>
            <img src={image} alt=""/>
            <div className={cn.movieInfo}>
                <strong>{name}</strong>
                <p><i className="fas fa-star"/> <strong>{rating}</strong>/{maxRating}</p>
                <div className={cn.movieDescription}>{description}</div>
            </div>
        </div>
    )
}