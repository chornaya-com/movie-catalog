import {favouritesReducer, initialFavouritesState} from "./reducers";
import {addToFavourites, removeFromFavourites} from "./actions";

describe('favourites reducer', () => {
    describe('add to favourites', () => {
        it('should add an item to favourites', () => {
            const movie = {id: '123'};
            const state = {...initialFavouritesState};
            const newState = favouritesReducer(state, addToFavourites(movie));
            expect(newState.favourites.length).toBe(1);
            expect(newState.favourites[0].id).toBe("123");
        });

        it('should not add an item if it\'s already in favourites', () => {
            const movie = {id: 123};
            const state = {...initialFavouritesState, favourites: [{id: 123}]};
            const newSate = favouritesReducer(state, addToFavourites(movie));
            expect(newSate).toEqual(state);
        });
    });

    describe('remove from favourites', () => {
        it('should remove an item from favourites', () => {
            const state = {...initialFavouritesState, favourites: [{id: 123}]};
            const newState = favouritesReducer(state, removeFromFavourites(123));
            expect(newState.favourites.length).toBe(0);
        });

        it('should remove nothing, if id doesn\'t exist in the state', () => {
            const state = {...initialFavouritesState, favourites: [{id: 123}]};
            const newState = favouritesReducer(state, removeFromFavourites(456));
            expect(newState).toEqual(state);
        })
    });
})