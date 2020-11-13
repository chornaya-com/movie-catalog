import React from 'react';
import * as cn from '../moviePage/MoviePage.module.css';
import {Link, useParams} from 'react-router-dom';

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
        youtubeVideo,
        fetchMovie,
        recommendations,
    } = props;

    const {id} = useParams();

    React.useEffect(() => {
        fetchMovie(id);
        window.scrollTo(0, 0);
    }, [fetchMovie, id]);

    const videosJSX = youtubeVideo ? (
        <iframe
            title={youtubeVideo.id}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeVideo.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    ) : null;

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
            <div className={cn.recommendations}>
                <div className={cn.recommendationsHeader}>
                    <strong>Recommendations</strong>
                </div>
                <div className={cn.recommendedFilmsBar}>
                    {recommendations.map((item) => {
                        return (
                            <Link to={`/movie/${item.id}`} key={item.id} className={cn.link}>
                                <div className={cn.recommendedFilm}>
                                    <img
                                        className={cn.recommendedFilmPoster}
                                        src={item.recommendationPoster}
                                        alt=""
                                    />
                                    <p className={cn.recommendedFilmTitle}>{item.title}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
