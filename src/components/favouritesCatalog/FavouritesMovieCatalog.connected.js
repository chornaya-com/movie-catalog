import {connect} from 'react-redux';
import {selectFavourites} from '../../selectors/selectors';
import {FavouritesCatalog} from './FavouritesCatalog';

const mapStateToProps = (state) => {
    return {
        movies: selectFavourites(state),
    };
};

export const FavouritesMovieCatalogConnected = connect(mapStateToProps)(FavouritesCatalog);
