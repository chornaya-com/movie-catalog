import {joinNames} from '../components/moviePage/MoviePage';

export function selectMoviesForMovieCatalog(state) {
    return state.movieList.movies.map((movie) => {
        return {
            name: movie.title,
            description: movie.overview,
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            rating: movie.vote_average,
            id: movie.id,
            maxRating: 10,
        };
    });
}

export function selectMovieTitle(state) {
    return state.movie.movieInfo?.original_title;
}

export function selectMoviePoster(state) {
    return `https://image.tmdb.org/t/p/w500${state.movie.movieInfo?.poster_path}`;
}

export function selectMovieGenres(state) {
    return state.movie.movieInfo ? joinNames(state.movie.movieInfo.genres) : '';
}

export function selectMovieCountries(state) {
    return state.movie.movieInfo ? joinNames(state.movie.movieInfo.production_countries) : '';
}

export function selectMovieLanguages(state) {
    return state.movie.movieInfo ? joinNames(state.movie.movieInfo.spoken_languages) : '';
}

export function selectMovieRating(state) {
    return state.movie.movieInfo?.vote_average;
}

export function selectMovieOverview(state) {
    return state.movie.movieInfo?.overview;
}

export function selectMovieReleaseDate(state) {
    return state.movie.movieInfo?.release_date.slice(0, 4);
}

export function selectFavourites(state) {
    return state.favourites.favourites;
}

export function selectNumberOfFavMovies(state) {
    return state.favourites.favourites.length;
}

export function selectIsFavouriteMovie(state, id) {
    return state.favourites.favourites.some((movie) => movie.id === id);
}
