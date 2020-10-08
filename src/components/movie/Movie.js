import React from "react";
import * as cn from "./Movie.module.css";

export function Movie(props) {
    const {id, name, description, image, rating, maxRating, onAddToFavourites} = props;
    const movie = {id, name, description, image, rating, maxRating};

    function onClick() {
        onAddToFavourites(movie);
    }

    return (
        <div className={cn.movie}>
            <img src={image} alt=""/>
            <div className={cn.movieInfo}>
                <strong>{name}</strong>
                <p><i className="fas fa-star"/> <strong>{rating}</strong>/{maxRating}</p>
                <div className={cn.movieDescription}>{description}</div>
                <button className={cn.addToFavButton} onClick={onClick}>Add to favourite</button>
            </div>
        </div>
    )
}