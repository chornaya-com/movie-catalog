import {SET_MOVIE, SET_RECOMMENDATIONS, SET_VIDEOS, SET_CAST, RESET_MOVIE} from './actions';

export const initialMovieState = {
    movieInfo: null,
    videos: [],
    recommendations: [],
    cast: [],
    isLoaded: false,
};

export function movieReducer(state = initialMovieState, action) {
    switch (action.type) {
        case RESET_MOVIE: {
            return initialMovieState;
        }
        case SET_MOVIE: {
            return {...state, isLoaded: true, movieInfo: action.payload};
        }
        case SET_VIDEOS: {
            return {...state, videos: action.payload};
        }
        case SET_RECOMMENDATIONS: {
            return {...state, recommendations: action.payload};
        }
        case SET_CAST: {
            return {...state, cast: action.payload};
        }
        default: {
            return state;
        }
    }
}
