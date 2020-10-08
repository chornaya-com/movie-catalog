import {ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES} from "./actions";

const initialFavouritesState = {
    favourites: []
};

export function favouritesReducer(state = initialFavouritesState, action) {
    switch (action.type) {
        case ADD_TO_FAVOURITES: {
            if (state.favourites.some(movie => movie.id === action.payload.id)) {
                return state;
            }
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            };

        }
        case REMOVE_FROM_FAVOURITES: {
            return {
                ...state,
                favourites: state.favourites.filter(movie => movie.id !== action.payload)
            };
        }
        default: {
            return state;
        }
    }
}