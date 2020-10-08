export const ADD_TO_FAVOURITES = "favourites/ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "favourites/REMOVE_FROM_FAVOURITES";

export function addToFavourites(movie) {
    return {
        type: ADD_TO_FAVOURITES,
        payload: movie
    };
}

export function removeFromFavourites(id) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        payload: id
    };
}