export const SET_MOVIE = 'movie/SET_MOVIE';
export const SET_VIDEOS = 'movie/SET_VIDEO';
export const SET_RECOMMENDATIONS = 'movie/SET_RECOMMENDATIONS';

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
