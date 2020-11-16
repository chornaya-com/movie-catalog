export const SET_MOVIE = 'movie/SET_MOVIE';
export const SET_VIDEOS = 'movie/SET_VIDEO';
export const SET_RECOMMENDATIONS = 'movie/SET_RECOMMENDATIONS';
export const SET_CAST = 'movie/SET_CAST';
export const RESET_MOVIE = 'movie/RESET_MOVIE';

export function resetMovie() {
    return {
        type: RESET_MOVIE,
    };
}

export function setMovie(movie) {
    return {
        type: SET_MOVIE,
        payload: movie,
    };
}

export function setVideos(videos) {
    return {
        type: SET_VIDEOS,
        payload: videos,
    };
}

export function setRecommendations(recommendations) {
    return {
        type: SET_RECOMMENDATIONS,
        payload: recommendations,
    };
}

export function setCast(cast) {
    return {
        type: SET_CAST,
        payload: cast,
    };
}
