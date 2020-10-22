import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Footer} from "./components/footer/Footer";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {MovieCatalogConnected} from "./components/movieCatalog/MovieCatalog.connected";
import {HeaderConnected} from "./components/header/Header.connected";
import {FavouritesMovieCatalogConnected} from "./components/movieCatalog/FavouritesMovieCatalog.connected";


function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <HeaderConnected/>
                    <Switch>
                        <Route path="/favourites">
                            <FavouritesMovieCatalogConnected/>
                        </Route>
                        <Route path="/">
                            <MovieCatalogConnected/>
                        </Route>
                    </Switch>
                <Footer/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
