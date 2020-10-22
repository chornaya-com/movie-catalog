import {connect} from "react-redux";
import {MovieCatalog} from "./MovieCatalog";
import {selectFavourites} from "../../selectors/selectors";

const mapStateToProps = (state) => {
    return {
        movies: selectFavourites(state)
    };
}

export const FavouritesMovieCatalogConnected = connect(mapStateToProps)(MovieCatalog);