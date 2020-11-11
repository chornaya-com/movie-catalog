import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {movieListReducer} from './movieList/reducer';
import {favouritesReducer} from './favourites/reducers';

const reducers = {
    movieList: movieListReducer,
    favourites: favouritesReducer,
};

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, applyMiddleware(thunk));
