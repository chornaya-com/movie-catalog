import React from 'react';
import movie from './movie.json';
import videos from './video.json';
import {joinNames, MoviePage} from './MoviePage';
import {number, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import {BrowserRouter as Router} from 'react-router-dom';

export default {
    title: 'Movie Page',
};

export const MoviePageComponent = () => {
    const posterPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const genres = joinNames(movie.genres);
    const countries = joinNames(movie.production_countries);
    const languages = joinNames(movie.spoken_languages);

    const props = {
        id: number('id', 528085),
        posterPath,
        genres,
        countries,
        languages,
        title: text('Title', movie.original_title),
        rating: movie.vote_average,
        overview: movie.overview,
        releaseDate: movie.release_date.slice(0, 4),
        videos: videos.results,
        fetchMovie: action('fetchMovie'),
    };

    return (
        <Router>
            <MoviePage {...props} />
        </Router>
    );
};
