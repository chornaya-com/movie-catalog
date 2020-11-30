import {ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES} from './actions';

export const favouritesLocalStorageKey = 'favouritesState';

const favouritesLocalStorageState = JSON.parse(
    localStorage.getItem(favouritesLocalStorageKey) || 'null',
);

export const initialFavouritesState = favouritesLocalStorageState || {
    favourites: [],
};

export function favouritesReducer(state = initialFavouritesState, action) {
    switch (action.type) {
        case ADD_TO_FAVOURITES: {
            if (state.favourites.some((movie) => movie.id === action.payload.id)) {
                return state;
            }
            return {
                ...state,
                favourites: [...state.favourites, action.payload],
            };
        }
        case REMOVE_FROM_FAVOURITES: {
            return {
                ...state,
                favourites: state.favourites.filter((movie) => movie.id !== action.payload),
            };
        }
        default: {
            return state;
        }
    }
}
