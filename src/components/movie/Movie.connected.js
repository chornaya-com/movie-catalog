import {addToFavourites, removeFromFavourites} from "../../redux/favourites/actions";
import {Movie} from "./Movie";
import {connect} from "react-redux";
import {selectIsFavouriteMovie} from "../../selectors/selectors";

const mapStateToProps = (state, {id}) => {
    return {
        isFavourite: selectIsFavouriteMovie(state, id)

    };
}

const dispatchProps = {
    onAddToFavourites: addToFavourites,
    onRemoveFromFavourites: removeFromFavourites
};

export const MovieConnected = connect(mapStateToProps, dispatchProps)(Movie);