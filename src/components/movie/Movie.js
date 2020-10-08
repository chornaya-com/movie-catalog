import React from "react";
import * as cn from "./Movie.module.css";

export function Movie(props) {
    const {id, name, description, image, rating, maxRating, onAddToFavourites, isFavourite, onRemoveFromFavourites} = props;
    const movie = {id, name, description, image, rating, maxRating};

    function onAdd() {
        onAddToFavourites(movie);
    }

    function onRemove() {
        onRemoveFromFavourites(id)
    }

    return (
        <div className={cn.movie}>
            <img src={image} alt=""/>
            <div className={cn.movieInfo}>
                <strong>{name}</strong>
                <p><i className="fas fa-star"/> <strong>{rating}</strong>/{maxRating}</p>
                <div className={cn.movieDescription}>{description}</div>
                {!isFavourite && (
                    <button className={cn.addToFavButton} onClick={onAdd}>Add to favourite</button>
                )}
                {isFavourite && (
                    <button className={cn.addToFavButton} onClick={onRemove}>Remove from favourites</button>
                )}
            </div>
        </div>
    )
}