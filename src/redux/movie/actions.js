export const SET_MOVIE = 'movie/SET_MOVIE';

export function setMovie(movie) {
    return {
        type: SET_MOVIE,
        payload: movie,
    };
}
