import {fetchMovies} from "../../redux/movieList/thunks";
import {connect} from "react-redux";
import {MovieCatalog} from "./MovieCatalog";
import {selectMoviesForMovieCatalog} from "../../selectors/selectors";

const mapStateToProps = (state) => {
    return {
        movies: selectMoviesForMovieCatalog(state)
    };
}

const dispatchProps = {
    onInit : fetchMovies
}

export const MovieCatalogConnected = connect(mapStateToProps, dispatchProps)(MovieCatalog);