import {SET_MOVIES} from "./actions";

export const initialMovieListState = {
    movies: []
}

export function movieListReducer(movieListState = initialMovieListState, action) {
    switch (action.type) {
        case SET_MOVIES: {
            return {
                ...movieListState,
                movies: action.payload
            }
        }
        default: {
            return movieListState
        }
    }
}