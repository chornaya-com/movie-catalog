import {createStore, combineReducers, applyMiddleware} from 'redux';
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

export const store = createStore(rootReducer, applyMiddleware(thunk));
