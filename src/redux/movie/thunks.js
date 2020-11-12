import axios from 'axios';
import {setMovie, setVideos} from './actions';

export function fetchMovie(id) {
    return async (dispatch) => {
        const movieInfoUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=e29a479c4bed9f110595f8fc2ecbe58a`;
        const movieInfoResponse = await axios.get(movieInfoUrl);
        dispatch(setMovie(movieInfoResponse.data));

        const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=e29a479c4bed9f110595f8fc2ecbe58a`;
        const videoResponse = await axios.get(videoUrl);
        dispatch(setVideos(videoResponse.data.results || []));
    };
}
