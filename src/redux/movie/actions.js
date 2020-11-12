export const SET_MOVIE = 'movie/SET_MOVIE';
export const SET_VIDEOS = 'movie/SET_VIDEO';

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
