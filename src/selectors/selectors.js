export function selectMoviesForMovieCatalog(state) {
    return state.movieList.movies.map(movie => {
        return {
            name: movie.title,
            description: movie.overview,
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            rating: movie.vote_average,
            id: movie.id,
            maxRating: 10
        }
    });
}

export function selectFavourites(state) {
    return state.favourites.favourites;
}

export function selectNumberOfFavMovies(state) {
    return state.favourites.favourites.length;
}

export function selectIsFavouriteMovie(state, id) {
    return state.favourites.favourites.some(movie => movie.id === id);
}

