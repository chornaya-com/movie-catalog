import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {movieListReducer} from "./movieList/reducers";

const reducers = {
    movieList: movieListReducer
}

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, applyMiddleware(thunk));