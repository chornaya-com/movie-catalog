import mockedMoviesApiResponse from './moviesApiResponse.json';
import {initialMovieListState, movieListReducer} from './reducers';
import {setMovies} from "./actions";

describe('movie list reducer', () => {
    it('set movies', () => {
        const state = {...initialMovieListState};
        const newState = movieListReducer(state, setMovies(mockedMoviesApiResponse.results));
        expect(newState.movies.length).toBe(20);
        expect(newState.movies).toEqual(mockedMoviesApiResponse.results);
    })
})