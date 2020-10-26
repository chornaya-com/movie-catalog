import React from 'react';
import * as cn from './Movie.module.css';
import {shortenDescriptionText} from '../../utils/shortenDescriptionText';

export function Movie(props) {
    const {
        id,
        name,
        description,
        image,
        rating,
        maxRating,
        onAddToFavourites,
        isFavourite,
        onRemoveFromFavourites,
    } = props;

    const [isOpenedDescription, setIsOpenedDescription] = React.useState(false);
    const shortDescription = shortenDescriptionText(description, 200);
    const movie = {
        id,
        name,
        description,
        image,
        rating,
        maxRating,
    };

    function onAdd(event) {
        event.preventDefault();
        event.stopPropagation();
        onAddToFavourites(movie);
    }

    function onRemove(event) {
        event.preventDefault();
        event.stopPropagation();
        onRemoveFromFavourites(id);
    }

    function toggleDescription() {
        setIsOpenedDescription(!isOpenedDescription);
    }

    return (
        <div className={cn.movie}>
            <img className={cn.imageMovieList} src={image} alt="" />
            <div className={cn.movieInfo}>
                <strong>{name}</strong>
                <p>
                    <i className="fas fa-star" /> <strong>{rating}</strong>/{maxRating}
                </p>
                <div className={cn.movieDescription} onClick={toggleDescription}>
                    {isOpenedDescription ? description : shortDescription}
                </div>
                {!isFavourite && (
                    <button className={cn.addToFavButton} onClick={onAdd}>
                        Add <i className="fas fa-heart" />
                    </button>
                )}
                {isFavourite && (
                    <button className={cn.removeFromFavourites} onClick={onRemove}>
                        Remove <i className="fas fa-heart-broken" />
                    </button>
                )}
            </div>
        </div>
    );
}
