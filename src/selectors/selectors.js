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

export function selectNumberOfFavMovies(state) {
    return selectMoviesForMovieCatalog(state).length
}

