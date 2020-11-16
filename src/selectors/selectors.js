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

export function selectVideos(state) {
    return state.movie.videos;
}

export function selectFirstYouTubeVideo(state) {
    const videos = selectVideos(state);
    const youTubeVideos = videos.filter((video) => video.site === 'YouTube');
    return youTubeVideos[0] || null;
}

export function selectRecommendations(state) {
    return state.movie.recommendations.map((item) => {
        return {
            title: item.title,
            recommendationPoster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            id: item.id,
        };
    });
}

export function selectActors(state) {
    return state.movie.cast.map((item) => {
        return {
            name: item.name,
            character: item.character,
            id: item.id,
            actorPhoto: item.profile_path
                ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                : null,
        };
    });
}

export function selectMovieIsLoaded(state) {
    return state.movie.isLoaded;
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
