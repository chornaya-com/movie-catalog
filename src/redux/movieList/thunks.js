import axios from 'axios';
import {setMovies} from './actions';

export function fetchMovies() {
    return async (dispatch) => {
        const url = 'https://api.themoviedb.org/3/discover/movie?api_key=e29a479c4bed9f110595f8fc2ecbe58a';
        const response = await axios.get(url);

        dispatch(setMovies(response.data.results));
        // dispatch(setMovies(responseJSON.results));
    };
}

export function searchMovies(searchText) {
    return async (dispatch) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=e29a479c4bed9f110595f8fc2ecbe58a&query=${searchText}`;
        const response = await axios.get(url);

        dispatch(setMovies(response.data.results));
    };
}
