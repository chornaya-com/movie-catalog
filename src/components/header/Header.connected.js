import {selectNumberOfFavMovies } from "../../selectors/selectors";
import {Header} from "./Header";
import {connect} from "react-redux";
import {searchMovies} from "../../redux/movieList/thunks";

export function mapStateToProps (state) {
    return {
        numberOfFavMovies: selectNumberOfFavMovies(state)
    };
}

export const dispatchProps = {
    searchMovies
}

export const HeaderConnected = connect(mapStateToProps, dispatchProps)(Header);