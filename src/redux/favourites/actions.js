export const ADD_TO_FAVOURITES = "favourites/ADD_TO_FAVOURITES";

export function addToFavourites(movie) {
    return {
        type: ADD_TO_FAVOURITES,
        payload: movie
    }
}