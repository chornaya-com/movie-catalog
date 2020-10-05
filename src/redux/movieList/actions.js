export const SET_MOVIES = 'movieList/GET_MOVIES';

export function setMovies(movies) {
    return {
        type: SET_MOVIES,
        payload: movies
    };
}