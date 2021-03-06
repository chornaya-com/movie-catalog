import React from 'react';
import * as cn from './FavouritesCatalog.module.css';
import {MovieConnected} from '../movie/Movie.connected';

export function FavouritesCatalog(props) {
    const {onInit, movies} = props;

    React.useEffect(() => {
        if (onInit) {
            onInit();
        }
    }, [onInit]);

    const moviesJsx = movies.map((movie) => <MovieConnected key={movie.id} {...movie} />);

    return (
        <div className={cn.favouritesCatalog}>
            {moviesJsx.length ? (
                <div className={cn.favouritesCatalogRow}>{moviesJsx}</div>
            ) : (
                <div className={cn.favouritesCatalogMessage}>You haven't added movies yet.</div>
            )}
        </div>
    );
}
