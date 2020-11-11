import {SET_MOVIE} from './actions';

export const initialMovieState = {
    movieInfo: null,
};

export function movieReducer(state = initialMovieState, action) {
    switch (action.type) {
        case SET_MOVIE: {
            return {...state, movieInfo: action.payload};
        }
        default: {
            return state;
        }
    }
}
