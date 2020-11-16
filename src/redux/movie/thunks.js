import axios from 'axios';
import {resetMovie, setCast, setMovie, setRecommendations, setVideos} from './actions';

export function fetchMovie(id) {
    return async (dispatch) => {
        dispatch(resetMovie());

        const movieInfoUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=e29a479c4bed9f110595f8fc2ecbe58a`;
        const movieInfoResponse = await axios.get(movieInfoUrl);
        dispatch(setMovie(movieInfoResponse.data));

        const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=e29a479c4bed9f110595f8fc2ecbe58a`;
        const videoResponse = await axios.get(videoUrl);
        dispatch(setVideos(videoResponse.data.results || []));

        const recommendationsUrl = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=e29a479c4bed9f110595f8fc2ecbe58a`;
        const recommendationsResponse = await axios.get(recommendationsUrl);
        dispatch(setRecommendations(recommendationsResponse.data.results) || []);

        const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=e29a479c4bed9f110595f8fc2ecbe58a`;
        const castResponse = await axios.get(castUrl);
        dispatch(setCast(castResponse.data.cast) || []);
    };
}
