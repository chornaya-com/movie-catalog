import React from 'react';
import * as cn from '../moviePage/MoviePage.module.css';
import {useParams} from 'react-router-dom';

export function joinNames(array) {
    return array.map((item) => item.name).join(', ');
}

export function MoviePage(props) {
    const {
        posterPath,
        genres,
        countries,
        languages,
        title,
        rating,
        overview,
        releaseDate,
        videos,
        fetchMovie,
    } = props;

    const {id} = useParams();

    React.useEffect(() => {
        fetchMovie(id);
        window.scrollTo(0, 0);
    }, [fetchMovie, id]);

    const videosJSX = videos.map((item) => {
        if (item.site === 'YouTube') {
            return (
                <iframe
                    title={item.id}
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
                        <strong>{title}</strong>
                    </div>
                    <div className={cn.movieRating}>
                        <i className="fas fa-star" /> {rating}/10
                    </div>
                    <div className={cn.movieOverview}>{overview}</div>
                    <div className={cn.otherDetails}>
                        <p>
                            <strong>Genres:</strong> {genres}
                        </p>
                        <p>
                            <strong>Country:</strong> {countries}
                        </p>
                        <p>
                            <strong>Year:</strong> {releaseDate}
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
