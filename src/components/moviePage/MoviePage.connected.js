import {connect} from 'react-redux';
import {MoviePage} from './MoviePage';
import {
    selectMovieRating,
    selectMovieLanguages,
    selectMovieCountries,
    selectMovieGenres,
    selectMoviePoster,
    selectMovieTitle,
    selectMovieOverview,
    selectMovieReleaseDate,
    selectFirstYouTubeVideo,
    selectRecommendations,
    selectActors,
    selectMovieIsLoaded,
} from '../../selectors/selectors';
import {fetchMovie} from '../../redux/movie/thunks';

const mapStateToProps = (state) => {
    return {
        posterPath: selectMoviePoster(state),
        genres: selectMovieGenres(state),
        countries: selectMovieCountries(state),
        languages: selectMovieLanguages(state),
        title: selectMovieTitle(state),
        rating: selectMovieRating(state),
        overview: selectMovieOverview(state),
        releaseDate: selectMovieReleaseDate(state),
        youtubeVideo: selectFirstYouTubeVideo(state),
        recommendations: selectRecommendations(state).slice(0, 6),
        cast: selectActors(state).slice(0, 6),
        isLoaded: selectMovieIsLoaded(state),
    };
};

const dispatchProps = {
    fetchMovie: fetchMovie,
};

export const MoviePageConnected = connect(mapStateToProps, dispatchProps)(MoviePage);
