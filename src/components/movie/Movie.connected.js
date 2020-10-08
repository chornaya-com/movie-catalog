import {addToFavourites} from "../../redux/favourites/actions";
import {Movie} from "./Movie";
import {connect} from "react-redux";

const dispatchProps = {
    onAddToFavourites: addToFavourites
};

export const MovieConnected = connect(undefined, dispatchProps)(Movie);