import React from 'react';
import movie from './movie.json';
import videos from './video.json';
import * as cn from '../moviePage/MoviePage.module.css';

function joinNames(array) {
    return array.map((item) => item.name).join(', ');
}

export function MoviePage() {
    const posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const genres = joinNames(movie.genres);
    const countries = joinNames(movie.production_countries);
    const languages = joinNames(movie.spoken_languages);
    const videosJSX = videos.results.map((item) => {
        if (item.site === 'YouTube') {
            return (
                <iframe
                    key={item.id}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${item.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            );
        }
        return null;
    });

    return (
        <div className={cn.moviePage}>
            <div className={cn.movie}>
                <img className={cn.imageMoviePage} src={posterPath} alt="" />

                <div className={cn.movieInfo}>
                    <div className={cn.movieTitle}>
                        <strong>{movie.original_title}</strong>
                    </div>
                    <div className={cn.movieRating}>
                        <i className="fas fa-star" /> {movie.vote_average}/10
                    </div>
                    <div className={cn.movieOverview}>{movie.overview}</div>
                    <div className={cn.otherDetails}>
                        <p>
                            <strong>Genres:</strong> {genres}
                        </p>
                        <p>
                            <strong>Country:</strong> {countries}
                        </p>
                        <p>
                            <strong>Year:</strong> {movie.release_date.slice(0, 4)}
                        </p>
                        <p>
                            <strong>Language:</strong> {languages}
                        </p>
                    </div>
                </div>
            </div>
            <div className={cn.movieTrailer}>{videosJSX}</div>
        </div>
    );
}
