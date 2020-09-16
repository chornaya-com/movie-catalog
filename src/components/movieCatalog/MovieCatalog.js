import React from "react";
import * as cn from "./MovieCatalog.module.css";
import {initialState} from "../state";
import {Movie} from "../movie/Movie";


export function MovieCatalog() {
    const [movies,] = React.useState(initialState);

    const moviesJsx = movies.map(movie => (
        <Movie {...movie} key={movie.id}/>
    ));

    return (
        <div className={cn.movieCatalog}>
            <div className={cn.catalogBanner}>
                <div className={cn.catalogBackground}/>
                <div className={cn.catalogBannerTitle}>
                    <h2 className={cn.catalogTitle}>Neon Cinema</h2>
                    <p className={cn.catalogSubtitle}>No. 1 Online Cinema in the World</p>
                </div>
            </div>
            <div className={cn.catalogRow}>
                {moviesJsx}
            </div>
        </div>
    );
}