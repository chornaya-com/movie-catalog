import axios from 'axios';
import {setMovie} from '../movie/actions';

function fetchMovieInfo(id) {
    return async (dispatch) => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=e29a479c4bed9f110595f8fc2ecbe58a`;
        const response = await axios.get(url);

        dispatch(setMovie(response.data));
    };
}
