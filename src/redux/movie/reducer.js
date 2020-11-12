import {SET_MOVIE, SET_VIDEOS} from './actions';

export const initialMovieState = {
    movieInfo: null,
    videos: [],
};

export function movieReducer(state = initialMovieState, action) {
    switch (action.type) {
        case SET_MOVIE: {
            return {...state, movieInfo: action.payload};
        }
        case SET_VIDEOS: {
            return {...state, videos: action.payload};
        }
        default: {
            return state;
        }
    }
}
