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
} from '../../selectors/selectors';
import {fetchMovieInfo} from '../../redux/movie/thunks';

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
        videos: [],
    };
};

const dispatchProps = {
    fetchMovie: fetchMovieInfo,
};

export const MoviePageConnected = connect(mapStateToProps, dispatchProps)(MoviePage);
