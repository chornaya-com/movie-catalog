import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {movieListReducer} from './movieList/reducer';
import {favouritesReducer} from './favourites/reducers';
import {movieReducer} from './movie/reducer';

const reducers = {
    movieList: movieListReducer,
    favourites: favouritesReducer,
    movie: movieReducer,
};

const rootReducer = combineReducers(reducers);

const composeEnhancers =
    process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)));
